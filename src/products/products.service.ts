import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuid } from "uuid";

@Injectable()
export class ProductsService {
  private products: CreateProductDto[] = [
    {
      productId: uuid(),
      productName: "Sabritas Originales 28g",
      price: 23,
      countSeal: 3,
      provider: uuid(),

    },
    {
      productId: uuid(),
      productName: "Chips Fuego 13g",
      price: 29,
      countSeal: 4,
      provider: uuid(),
    },
    {
      productId: uuid(),
      productName: "Coca Cola 3L",
      price: 42,
      countSeal: 6,
      provider: uuid(),
    }
  ] 
  

  create(createProductDto: CreateProductDto) {
    createProductDto.productId = uuid();
    createProductDto.provider = uuid(); 
    this.products.push(createProductDto);
    return createProductDto;
  }

  findAll() {
    return this.products;
  }

  findOne(productId: string) {
    const product = this.products.filter((product) => product.productId === productId)[0];
    if(!product) throw new NotFoundException();
    return product;
  }

  findByProvider(productId: string){
    const productProv = this.products.filter((product) => product.provider === productId);
    if(!productProv) throw new NotFoundException();
    return productProv;
  }

  update(productId: string, updateProductDto: UpdateProductDto) {
    let productToUpdate = this.findOne(productId);
    return {
        ...productToUpdate,
        ...updateProductDto   
    }
  }

  remove(productId: string) {
    this.findOne(productId);
    this.products = this.products.filter((product) => product.productId !== productId);
    return this.products;
  }
}
