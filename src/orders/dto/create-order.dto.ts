import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsDate } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({ example: '2023-03-13T08:30', description: 'Buyurtma vaqti'})
    @IsNotEmpty()
    @IsDate()
    readonly date: Date;
}
