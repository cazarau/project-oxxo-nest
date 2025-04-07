import { IsEmail, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Location } from "src/locations/entities/location.entity";

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(30)
    employeeName: string;
    @IsString()
    @MaxLength(70)
    employeeLastName: string;
    @IsString()
    @MaxLength(10)
    employeePhoneNumber: string;
    @IsString()
    @IsEmail()
    employeeEmail: string;
    @IsOptional()
    @IsObject()
    location: Location
}
