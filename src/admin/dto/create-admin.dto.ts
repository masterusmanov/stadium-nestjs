import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class CreateAdminDto {
    @ApiProperty({ example: 'UserName', description: 'Foydalanuvchi ismi'})
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @ApiProperty({ example: 'User@email.uz', description: 'Foydalanuvchi emaili'})
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: 'Telegram linki', description: 'telegram linki'})
    @IsNotEmpty()
    @IsString()
    readonly telegram_link: string;
}
