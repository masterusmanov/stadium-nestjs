import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StadiumTimesService } from './stadium_times.service';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { JwtUsersGuard } from '../guards/isActive.guard';

@Controller('stadium-times')
export class StadiumTimesController {
  constructor(private readonly stadiumTimesService: StadiumTimesService) {}

  @UseGuards(JwtUsersGuard)
  @Post()
  create(@Body() createStadiumTimeDto: CreateStadiumTimeDto) {
    return this.stadiumTimesService.create(createStadiumTimeDto);
  }

  @UseGuards(JwtUsersGuard)
  @Get()
  findAll() {
    return this.stadiumTimesService.findAll();
  }

  @UseGuards(JwtUsersGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stadiumTimesService.findOne(+id);
  }

  @UseGuards(JwtUsersGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStadiumTimeDto: UpdateStadiumTimeDto) {
    return this.stadiumTimesService.update(+id, updateStadiumTimeDto);
  }

  @UseGuards(JwtUsersGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stadiumTimesService.remove(+id);
  }
}
