import { Module } from '@nestjs/common';
import { ComfortService } from './comfort.service';
import { ComfortController } from './comfort.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comfort } from './model/comfort.model';
import { ComfortStadium } from '../comfort_stadium/model/comfort_stadium.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Comfort, ComfortStadium]), JwtModule],
  controllers: [ComfortController],
  providers: [ComfortService]
})
export class ComfortModule {}
