import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Categories } from './model/category.model';
import { Stadium } from '../stadiums/models/stadium.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Categories, Stadium]),JwtModule],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
