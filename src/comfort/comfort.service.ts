import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comfort } from './model/comfort.model';

@Injectable()
export class ComfortService {
  constructor(@InjectModel(Comfort) private comfortRepo: typeof Comfort) {}

  async create(createComfortDto: CreateComfortDto) {
    const newComfort = await this.comfortRepo.create(createComfortDto)
    return newComfort;
  };

  async findAll() {
    const comforts = await this.comfortRepo.findAll({include:{all: true}})
    return comforts;
  };

  async findOne(id: number) {
    const oneComfort = await this.comfortRepo.findOne({where: {id}});
    return oneComfort;
  };

  async updateComfort(id: number, updateComfortDto: UpdateComfortDto) {
    const oneComfort = await this.comfortRepo.update(updateComfortDto, {
      where: {id},
      returning: true
    })
    return oneComfort;
  };

  async remove(id: number) {
    const comfort = await this.comfortRepo.destroy({where: {id}});
  
    if(!comfort){
      throw new HttpException("Comfort o'chirildi", HttpStatus.NOT_FOUND)
    }
    return {message: 'User uchirildi'}
  };

  async getComfortByValue(value: string){  
    const comfort = await this.comfortRepo.findOne({ where: { value}})
    return comfort
  };
}