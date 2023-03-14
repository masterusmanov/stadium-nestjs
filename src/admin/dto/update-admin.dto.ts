import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class UpdateAdminDto {
    @ApiProperty({ example: 'UpdateUserName', description: 'Foydalanuvchi ismini yangilash'})
    @IsNotEmpty()
    @IsString()
    readonly username?: string;

    @ApiProperty({ example: 'UpdateUser@email.uz', description: 'Foydalanuvchi emailini yangilash'})
    @IsEmail()
    readonly email?: string;

    @ApiProperty({ example: 'Telegram linki', description: 'telegram linki'})
    @IsNotEmpty()
    @IsString()
    readonly telegram_link?: string;
}
