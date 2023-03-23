import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UsersCard } from './model/user_card.model';

@Injectable()
export class UserCardsService {
  constructor(@InjectModel(UsersCard) private userCardRepo: typeof UsersCard){}

  async create(createUserCardDto: CreateUserCardDto) {
    const newUsercard = await this.userCardRepo.create(createUserCardDto)
    return newUsercard;
  }

  async findAll() {
    const alluserCard = await this.userCardRepo.findAll({include: {all: true}})
    return alluserCard;
  }

  async findOne(id: number) {
    const oneuserCard = await this.userCardRepo.findOne({where: {id}})
    return oneuserCard;
  }

  async update(id: number, updateUserCardDto: UpdateUserCardDto) {
    const upuserCard = this.userCardRepo.update(updateUserCardDto, {
      where: {id},
      returning: true
    })
    return `This action updates a #${id} userCard`;
  }

  async remove(id: number) {
    const removeuserCard = await this.userCardRepo.destroy({where: {id}})
    if(!removeuserCard){
      throw new HttpException("Faoydalanuvchini kartasi yo'q", HttpStatus.NOT_FOUND)
    }
    return {message: "Foydalanuvchi kartasi o'chirildi"};
  }
}
