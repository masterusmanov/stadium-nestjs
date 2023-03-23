import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserCardsService } from './user_cards.service';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { JwtUsersGuard } from '../guards/isActive.guard';

@Controller('user-cards')
export class UserCardsController {
  constructor(private readonly userCardsService: UserCardsService) {}

  @UseGuards(JwtUsersGuard)
  @Post()
  create(@Body() createUserCardDto: CreateUserCardDto) {
    return this.userCardsService.create(createUserCardDto);
  }

  @UseGuards(JwtUsersGuard)
  @Get()
  findAll() {
    return this.userCardsService.findAll();
  }

  @UseGuards(JwtUsersGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCardsService.findOne(+id);
  }

  @UseGuards(JwtUsersGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCardDto: UpdateUserCardDto) {
    return this.userCardsService.update(+id, updateUserCardDto);
  }

  @UseGuards(JwtUsersGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCardsService.remove(+id);
  }
}
