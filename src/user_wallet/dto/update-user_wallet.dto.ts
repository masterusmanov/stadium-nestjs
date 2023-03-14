import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";


export class UpdateUserWalletDto {
    @ApiProperty({ example: 'updatewallet', description: 'Hamyonni yangilash'})
    @IsNumber()
    readonly wallet?: number;
}