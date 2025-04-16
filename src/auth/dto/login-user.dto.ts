import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginUserDto {

    @ApiProperty({
        default: "user@gamil.com"
    })
    @IsString()
    @IsEmail()
    userEmail: string;

    @ApiProperty({
        default: "345166df16dshg"
    })
    @IsString()
    @MinLength(8)
    userPassword: string;
}