import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ComfortStadium } from './model/comfort_stadium.model';
import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';


@Injectable()
export class ComfortStadiumService {
  constructor(@InjectModel(ComfortStadium) private comfortStadiumRepo: typeof ComfortStadium) {}

  async create(createComfortStadiumDto: CreateComfortStadiumDto) {
     const comfortStd = await this.comfortStadiumRepo.create(createComfortStadiumDto);
     return comfortStd;
  }

  async findAll() {
    const comfortStd = await this.comfortStadiumRepo.findAll({include: {all: true}})
    return comfortStd;
  }

  async findOne(id: number) {
    const comfortStd = await this.comfortStadiumRepo.findOne({where: {id}})
    return comfortStd;
  }

  async remove(id: number) {
    const comfortStd = await this.comfortStadiumRepo.destroy({where: {id}});
    if(!comfortStd){
      throw new HttpException("Tanlangan Comfort stadion ro'yhatdan o'chirildi", HttpStatus.NOT_FOUND)
    }
    return comfortStd;
  }
}
