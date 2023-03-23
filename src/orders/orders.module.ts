import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Orders } from './models/order.model';
import { StadiumTimes } from '../stadium_times/model/stadium_time.model';
import { User_wallet } from '../user_wallet/models/user_wallet.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Orders, StadiumTimes, User_wallet]), JwtModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
