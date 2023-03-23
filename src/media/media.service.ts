import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Media } from './models/media.model';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media) private mediaRepo: typeof Media){}

  async create(createMediaDto: CreateMediaDto) {
    const newmedia = await this.mediaRepo.create(createMediaDto)
    return newmedia;
  }

  async findAll() {
    const allmedia = await this.mediaRepo.findAll({include: {all: true}});
    return allmedia;
  }

  async findOne(id: number) {
    const onemedia = await this.mediaRepo.findOne({where: {id}})
    return `This action returns a #${id} media`;
  }

  async update(id: number, updateMediaDto: UpdateMediaDto) {
    const apmedia = this.mediaRepo.update(updateMediaDto, {
      where: {id},
      returning: true
    })
    return apmedia;
  }

  async remove(id: number) {
    const removemedia = await this.mediaRepo.destroy({where: {id}})
    if(!removemedia){
      throw new HttpException("Media mavjud emas", HttpStatus.NOT_FOUND)
    }
    return {message: "Media o'chirildi"}
  }
}
