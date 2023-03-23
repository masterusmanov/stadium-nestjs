import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comments } from './models/comment.model';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comments) private commentsRepo: typeof Comments){}

  async create(createCommentDto: CreateCommentDto) {
    const newcomment = await this.commentsRepo.create(createCommentDto)
    return newcomment;
  };

  async findAll() {
    const comments = await this.commentsRepo.findAll({include: {all: true}})
    return comments;
  };

  async findOne(id: number) {
    const commentone = await this.commentsRepo.findOne({where: {id}})
    return commentone;
  };

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const updatecomment = await this.commentsRepo.update(updateCommentDto, {
      where: {id},
      returning: true
    })
    return updatecomment;
  };

  async remove(id: number) {
    const removecomment = await this.commentsRepo.destroy({where: {id}})
    if(!removecomment){
      throw new HttpException('Comment mavjud emas', HttpStatus.NOT_FOUND)
    };
    return {message: "Comment o'chirildi"};
  };
}
