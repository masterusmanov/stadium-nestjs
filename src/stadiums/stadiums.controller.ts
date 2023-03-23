import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { isOwnerGuard } from '../guards/isOwner.guard';

@Controller('stadiums')
export class StadiumsController {
  constructor(private readonly stadiumsService: StadiumsService) {}

  @UseGuards(isOwnerGuard)
  @Post()
  create(@Body() createStadiumDto: CreateStadiumDto) {
    return this.stadiumsService.create(createStadiumDto);
  }

  @Get()
  findAll() {
    return this.stadiumsService.findAll();
  }

  @UseGuards(isOwnerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stadiumsService.findOne(+id);
  }

  @UseGuards(isOwnerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStadiumDto: UpdateStadiumDto) {
    return this.stadiumsService.update(+id, updateStadiumDto);
  }

  @UseGuards(isOwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stadiumsService.remove(+id);
  }
}
