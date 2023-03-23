import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Stadium } from './models/stadium.model';
import { ComfortService } from '../comfort/comfort.service';

@Injectable()
export class StadiumsService {
  constructor(@InjectModel(Stadium) private stadiumRepo: typeof Stadium,
  private readonly comfortService: ComfortService) {} 

  async create(createStadiumDto: CreateStadiumDto) {
    const newstadium = await this.stadiumRepo.create(createStadiumDto)
    return newstadium;
  }

  async findAll() {
    const allstadium = await this.stadiumRepo.findAll({include: {all: true}})
    return allstadium;
  }

  async findOne(id: number) {
    const onestadium = await this.stadiumRepo.findOne({where: {id}})
    return onestadium;
  }

  async update(id: number, updateStadiumDto: UpdateStadiumDto) {
    const upstadium = await this.stadiumRepo.update(updateStadiumDto, {
      where: {id},
      returning: true
    })
    return upstadium;
  }

  async remove(id: number) {
    const removestadium = await this.stadiumRepo.destroy({where: {id}})
    if(!removestadium){
      throw new HttpException("Stadion mavjud emas", HttpStatus.NOT_FOUND)
    }
    return {message: "Stadion ro'yhatdan o'chirildi"};
  }
}
