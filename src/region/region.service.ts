import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './model/region.region';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region){}

  async create(createRegionDto: CreateRegionDto) {
    const newregion = await this.regionRepo.create(createRegionDto)
    return newregion;
  }

  async findAll() {
    const allregion = await this.regionRepo.findAll({include: {all: true}})
    return allregion;
  }

  async findOne(id: number) {
    const oneregion = await this.regionRepo.findOne({where: {id}})
    return oneregion;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const upregion = await this.regionRepo.update(updateRegionDto, {
      where: {id},
      returning: true
    })
    return `This action updates a #${id} region`;
  }

  async remove(id: number) {
    const removeregion = await this.regionRepo.destroy({where: {id}})
    if(!removeregion){
      throw new HttpException('Region mavjud emas', HttpStatus.NOT_FOUND)
    }
    return {message: "Region o'chirildi"};
  }
}
