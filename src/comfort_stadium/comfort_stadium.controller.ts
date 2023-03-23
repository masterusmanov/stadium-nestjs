import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ComfortStadiumService } from './comfort_stadium.service';
import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';
import { JwtUsersGuard } from '../guards/isActive.guard';


@Controller('comfort-stadium')
export class ComfortStadiumController {
  constructor(private readonly comfortStadiumService: ComfortStadiumService) {}
  
  @UseGuards(JwtUsersGuard)
  @Post()
  create(@Body() createComfortStadiumDto: CreateComfortStadiumDto) {
    return this.comfortStadiumService.create(createComfortStadiumDto);
  }

  @UseGuards(JwtUsersGuard)
  @Get()
  findAll() {
    return this.comfortStadiumService.findAll();
  }

  @UseGuards(JwtUsersGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comfortStadiumService.findOne(+id);
  }

  @UseGuards(JwtUsersGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comfortStadiumService.remove(+id);
  }
}
