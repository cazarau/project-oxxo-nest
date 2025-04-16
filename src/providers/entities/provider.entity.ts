import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
    providerId: string;

    @ApiProperty({
        default: "Bimbo"
    })
    @Column('text')
    providerName: string;

    @ApiProperty({
        default: "Bimbo@gmail.com"
    })
    @Column('text', {
        unique: true
    })
    providerEmail: string;

    @ApiProperty({
        default: "4613994243"
    })
    @Column({
        type: 'text',
        nullable: true,
    })
    providerPhoneNumber: string;  

    @OneToMany(() => Product, (product) => product.provider)
    products: Product[]
}
