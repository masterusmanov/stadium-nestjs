import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './model/cart.model';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart) {}

  async create(createCartDto: CreateCartDto) {
    const newCart = await this.cartRepo.create(createCartDto);
    return newCart;
  }

  async findAll() {
    const cartAll =  this.cartRepo.findAll({include:{all: true}});
    return cartAll;
  }

  async remove(id: number) {
    const cartremove = await this.cartRepo.destroy({where: {id}});

    if(!cartremove){
      throw new HttpException("Ma'lumot yo'q", HttpStatus.NOT_FOUND)
    }
    return {message: "Cart o'chirildi"};
  }
}
