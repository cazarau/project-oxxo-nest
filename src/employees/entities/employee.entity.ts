import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/locations/entities/location.entity";
import { User } from "src/auth/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    employeeId: string;

    @ApiProperty({
            default: "nombrePibe"
        })
    @Column('text')
    employeeName: string;

    @ApiProperty({
        default: "apellidoPibe"
    })
    @Column('text')
    employeeLastName: string;

    @ApiProperty({
        default: "4169331764"
    })
    @Column('text')
    employeePhoneNumber: string;

    @ApiProperty({
        default: "employee@gmail.com"
    })
    @Column('text', {
        unique: true
    })
    employeeEmail: string;

    @ApiProperty({
        default: "url/pfp.jpg"
    })
    @Column({
        type: 'text',
        nullable: true
    })
    employeePhoto: string;

    @ManyToOne(() => Location, (location) => location.employees)
    @JoinColumn({
        name: 'locationId'
    })
    location: Location;

    @OneToOne(() => User)
    @JoinColumn({
        name: "userId"
    })
    user: User;
}
