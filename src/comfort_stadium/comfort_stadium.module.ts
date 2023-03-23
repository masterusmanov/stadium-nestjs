import { Module } from '@nestjs/common';
import { ComfortStadiumService } from './comfort_stadium.service';
import { ComfortStadiumController } from './comfort_stadium.controller';
import { ComfortStadium } from './model/comfort_stadium.model';
import { Stadium } from '../stadiums/models/stadium.model';
import { Comfort } from '../comfort/model/comfort.model';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ComfortStadium, Stadium, Comfort]), JwtModule],
  controllers: [ComfortStadiumController],
  providers: [ComfortStadiumService]
})
export class ComfortStadiumModule {}
