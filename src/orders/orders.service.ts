import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Orders } from './models/order.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Orders) private ordersRepo: typeof Orders){}

  async create(createOrderDto: CreateOrderDto) {
    const neworder = await this.ordersRepo.create(createOrderDto)
    return neworder;
  }

  async findAll() {
    const allorders = await this.ordersRepo.findAll({include: {all: true}})
    return allorders;
  }

  async findOne(id: number) {
    const oneorder = await this.ordersRepo.findOne({where: {id}})
    return oneorder;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const uporder = await this.ordersRepo.update(updateOrderDto, {
      where: {id},
      returning: true
    })
    return uporder;
  }

  async remove(id: number) {
    const removeorder = this.ordersRepo.destroy({where: {id}});
    if(!removeorder){
      throw new HttpException("order mavjud emas", HttpStatus.NOT_FOUND)
    }
    return {message: "Order o'chirildi"};
  }
}
