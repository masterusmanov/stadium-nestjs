import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateUserWalletDto {
    @ApiProperty({ example: 'wallet', description: 'Hamyon'})
    @IsNumber()
    readonly wallet: number;
}
