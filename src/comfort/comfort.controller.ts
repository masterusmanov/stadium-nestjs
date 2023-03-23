import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ComfortService } from './comfort.service';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { JwtUsersGuard } from '../guards/isActive.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Comfort')
@Controller('comfort')
export class ComfortController {
  constructor(private readonly comfortService: ComfortService) {}

  @Post()
  create(@Body() createComfortDto: CreateComfortDto) {
    return this.comfortService.create(createComfortDto);
  }

  @UseGuards(JwtUsersGuard)
  @Get()
  findAll() {
    return this.comfortService.findAll();
  }

  @UseGuards(JwtUsersGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comfortService.findOne(+id);
  }

  @UseGuards(JwtUsersGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComfortDto: UpdateComfortDto) {
    return this.comfortService.updateComfort(+id, updateComfortDto);
  }

  @UseGuards(JwtUsersGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comfortService.remove(+id);
  }
}
