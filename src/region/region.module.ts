import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from './model/region.region';
import { Stadium } from '../stadiums/models/stadium.model';
import { District } from '../district/models/district.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Region, Stadium, District]), JwtModule],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule {}
