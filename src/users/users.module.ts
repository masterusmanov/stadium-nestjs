import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './models/user.model';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [SequelizeModule.forFeature([Users]), JwtModule.register({})],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
