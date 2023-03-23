import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { JwtUsersGuard } from '../guards/isActive.guard';

@Controller('user-wallet')
export class UserWalletController {
  constructor(private readonly userWalletService: UserWalletService) {}

  @UseGuards(JwtUsersGuard)
  @Post()
  create(@Body() createUserWalletDto: CreateUserWalletDto) {
    return this.userWalletService.create(createUserWalletDto);
  }

  @UseGuards(JwtUsersGuard)
  @Get()
  findAll() {
    return this.userWalletService.findAll();
  }

  @UseGuards(JwtUsersGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWalletService.findOne(+id);
  }

  @UseGuards(JwtUsersGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserWalletDto: UpdateUserWalletDto) {
    return this.userWalletService.update(+id, updateUserWalletDto);
  }

  @UseGuards(JwtUsersGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWalletService.remove(+id);
  }
}
