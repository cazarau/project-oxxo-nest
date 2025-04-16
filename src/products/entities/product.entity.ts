import { ApiProperty } from "@nestjs/swagger";
import { Provider } from "src/providers/entities/provider.entity";
import { Entity, ManyToOne, Column, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  productId: string;

  @ApiProperty({
      default: "Donitas Bimbo"
  })
  @Column({type: "text"})
  productName: string;

  @ApiProperty({
    default: 16.5
  })
  @Column({type: "float"})
  price: number;

  @ApiProperty({
    default: 3
  })
  @Column({type: "int"})
  countSeal: number;
  
  @ManyToOne(() => Provider, (provider) => provider.products)
  @JoinColumn({
    name: 'providerId'
  })
  provider: Provider
}
