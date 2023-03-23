import { Module } from '@nestjs/common';
import { UserCardsService } from './user_cards.service';
import { UserCardsController } from './user_cards.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersCard } from './model/user_card.model';
import { Users } from '../users/models/user.model';
import { Cart } from '../cart/model/cart.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([UsersCard, Users, Cart]), JwtModule],
  controllers: [UserCardsController],
  providers: [UserCardsService]
})
export class UserCardsModule {}
