import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { District } from './models/district.model';
import { Stadium } from '../stadiums/models/stadium.model';
import { Region } from '../region/model/region.region';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([District, Stadium, Region]), JwtModule],
  controllers: [DistrictController],
  providers: [DistrictService]
})
export class DistrictModule {}
