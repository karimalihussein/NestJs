import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber, Length, IsNumberString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @Length(3, 20)
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsNumberString()
    readonly phone: string;

    @IsString()
    readonly country?: string;
}