import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(20)
    readonly name: string;
    @ApiProperty({ required: false})
    readonly age?: number;
}