import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User_wallet } from './models/user_wallet.model';

@Injectable()
export class UserWalletService {
  constructor(@InjectModel(User_wallet) private userwalletRepo: typeof User_wallet){}

  async create(createUserWalletDto: CreateUserWalletDto) {
    const newUserWallet = await this.userwalletRepo.create(createUserWalletDto)
    return newUserWallet;
  }

  async findAll() {
    const userWallets = await this.userwalletRepo.findAll({include:{all: true}})
    return userWallets
  }

  async findOne(id: number) {
    const userWallet = await this.userwalletRepo.findOne({where: {id}});
    return userWallet
  }

  async update(id: number, updateUserWalletDto: UpdateUserWalletDto) {
    const upuserwallet = await this.userwalletRepo.update(updateUserWalletDto, {
      where: {id},
      returning: true
    })
    return upuserwallet;
  }

  async remove(id: number) {
    const userWallet = await this.userwalletRepo.destroy({where: {id}});

    if(!userWallet){
      throw new HttpException('userwalletRepo yuq', HttpStatus.NOT_FOUND)
    }
    return {message: 'userwalletRepo uchirildi'}
  }


}
