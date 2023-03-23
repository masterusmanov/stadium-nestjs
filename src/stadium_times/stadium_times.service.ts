import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StadiumTimes } from './model/stadium_time.model';

@Injectable()
export class StadiumTimesService {
  constructor(@InjectModel(StadiumTimes) private stadiumTimesRepo: typeof StadiumTimes){}

  async create(createStadiumTimeDto: CreateStadiumTimeDto) {
    const newstdTimes = await this.stadiumTimesRepo.create(createStadiumTimeDto)
    return newstdTimes;
  }

  async findAll() {
    const allstdTimes = await this.stadiumTimesRepo.findAll({include: {all: true}})
    return allstdTimes;
  }

  async findOne(id: number) {
    const onestdTimes = await this.stadiumTimesRepo.findOne({where: {id}})
    return onestdTimes;
  }

  async update(id: number, updateStadiumTimeDto: UpdateStadiumTimeDto) {
    const upstdTimes = await this.stadiumTimesRepo.update(updateStadiumTimeDto, {
      where: {id},
      returning: true
    })
    return upstdTimes;
  }

  async remove(id: number) {
    const removestdTimes = await this.stadiumTimesRepo.destroy({where: {id}})
    if(!removestdTimes){
      throw new HttpException("Stadion vaqti yo'q", HttpStatus.NOT_FOUND)
    }
    return {message: "Stadion vaqti o'chirildi"};
  }
}
