import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/locations/entities/location.entity";

@Entity()
export class Region {
    @PrimaryGeneratedColumn('increment')
    regionId: number;
    @Column({
        type: "text",
        unique: true
    })
    regionName: string;
    @Column('simple-array')
    regionStates: string[];

    @OneToMany(() => Location, (location) => location.region)
    locations: Location[];
}
