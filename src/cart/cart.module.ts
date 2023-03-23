import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './model/cart.model';
import { UsersCard } from '../user_cards/model/user_card.model';
import { StadiumTimes } from '../stadium_times/model/stadium_time.model';
import { User_wallet } from '../user_wallet/models/user_wallet.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Cart, UsersCard, StadiumTimes, User_wallet]), JwtModule],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
