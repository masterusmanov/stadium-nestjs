import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/district.model';
import { where } from 'sequelize';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private disctrictRepo: typeof District){}

  async create(createDistrictDto: CreateDistrictDto) {
    const newDistrict = await this.disctrictRepo.create(createDistrictDto)
    return newDistrict;
  }

  async findAll() {
    const allDistrict = await this.disctrictRepo.findAll({include: {all: true}})
    return allDistrict;
  }

  async findOne(id: number) {
    const onedistrict = await this.disctrictRepo.findOne({where: {id}})
    return onedistrict;
  }

  async remove(id: number) {
    const removedistrict = await this.disctrictRepo.destroy({where: {id}})
    if(!removedistrict){
      throw new HttpException("Bunday tuman mavjud emas", HttpStatus.NOT_FOUND)
    }
    return {message: "Ro'yhatdagi tuman o'chirildi"};
  }
}
