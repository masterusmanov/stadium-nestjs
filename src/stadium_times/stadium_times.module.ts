import { Module } from '@nestjs/common';
import { StadiumTimesService } from './stadium_times.service';
import { StadiumTimesController } from './stadium_times.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StadiumTimes } from './model/stadium_time.model';
import { Cart } from '../cart/model/cart.model';
import { Orders } from '../orders/models/order.model';
import { Stadium } from '../stadiums/models/stadium.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([StadiumTimes, Cart, Orders, Stadium]), JwtModule],
  controllers: [StadiumTimesController],
  providers: [StadiumTimesService]
})
export class StadiumTimesModule {}
