import { ApiProperty } from "@nestjs/swagger";
import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {

    @PrimaryGeneratedColumn('increment')
    locationId: number;

    @ApiProperty({
        default: "okso Pueblito"
    })
    @Column('text')
    locationName: string;

    @ApiProperty({
        default: "Prostituyentes, S/N, 76905 Pueblito"
    })
    @Column('text')
    locationAddress: string;

    @ApiProperty({
        default: [16, 32]
    })
    @Column('simple-array')
    locationLatLng: number[];

    @OneToOne(() => Manager, {
        eager: true,
    })
    @JoinColumn({
        name: "managerId"
    })
    manager: Manager;

    @ManyToOne(() => Region, (region) => region.locations)
    @JoinColumn({
        name: 'regionId'
    })
    region: Region;

    @OneToMany(() => Employee, (employee) => employee.location)
    employees: Employee[];
}
