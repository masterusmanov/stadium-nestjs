import { Module } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { StadiumsController } from './stadiums.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stadium } from './models/stadium.model';
import { Media } from '../media/models/media.model';
import { District } from '../district/models/district.model';
import { Region } from '../region/model/region.region';
import { ComfortStadium } from '../comfort_stadium/model/comfort_stadium.model';
import { Comfort } from '../comfort/model/comfort.model';
import { Categories } from '../categories/model/category.model';
import { Users } from '../users/models/user.model';
import { Comments } from '../comments/models/comment.model';
import { StadiumTimes } from '../stadium_times/model/stadium_time.model';
import { ComfortModule } from '../comfort/comfort.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { ComfortService } from '../comfort/comfort.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Media,
      District,
      Region,
      ComfortStadium,
      Comfort,
      Categories,
      Users,
      Comments,
      StadiumTimes,
      Stadium,
    ]),
    ComfortModule,
    JwtModule,
    UsersModule,
  ],
  controllers: [StadiumsController],
  providers: [StadiumsService, ComfortService],
})
export class StadiumsModule {}
