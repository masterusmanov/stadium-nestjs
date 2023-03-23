import { Module } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { UserWalletController } from './user_wallet.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Orders } from '../orders/models/order.model';
import { User_wallet } from './models/user_wallet.model';
import { Users } from '../users/models/user.model';
import { JwtUsersGuard } from '../guards/isActive.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Orders, User_wallet, Users]), JwtModule],
  controllers: [UserWalletController],
  providers: [UserWalletService]
})
export class UserWalletModule {}
