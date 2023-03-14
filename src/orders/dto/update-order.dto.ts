import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsDate } from "class-validator";


export class UpdateOrderDto {
    @ApiProperty({ example: '2023-03-13T08:30', description: 'Buyurtma vaqtini yangilash'})
    @IsNotEmpty()
    @IsDate()
    readonly date: Date;
};