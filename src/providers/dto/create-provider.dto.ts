import { IsEmail, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Provider } from "../entities/provider.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Product } from "src/products/entities/product.entity";


export class CreateProviderDto {

    @ApiProperty()
    @IsString()
    @MaxLength(100)
    providerName: string;

    @ApiProperty()
    @IsEmail()
    @IsString()
    providerEmail: string;

    @ApiProperty()
    @IsString()
    @MaxLength(15)
    @IsOptional()
    providerPhoneNumber: string; 
}