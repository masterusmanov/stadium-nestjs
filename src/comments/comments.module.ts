import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comments } from './models/comment.model';
import { Users } from '../users/models/user.model';
import { Stadium } from '../stadiums/models/stadium.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Comments, Users, Stadium]), JwtModule],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
