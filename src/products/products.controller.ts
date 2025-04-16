import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ROLES } from 'src/auth/constants/roles.constants';
import { ApiAuth } from 'src/auth/constants/api.decorator';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiAuth()
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Auth(ROLES.EMPLOYEE, ROLES.MANAGER)
  @ApiResponse({
    status: 201,
    example: {
      productId: "UUID",
      productName: "Donitas Bimbo",
      price: 16.5,
      countSeal: 5,
    } as Product
  })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Auth(ROLES.EMPLOYEE, ROLES.MANAGER)
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Auth(ROLES.EMPLOYEE, ROLES.MANAGER)
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({version: '4'})) productId: string) {
    return this.productsService.findOne(productId);
  }

  @Auth(ROLES.EMPLOYEE, ROLES.MANAGER)
  @Get('provider/:id')
  findByProvider(@Param('id', new ParseUUIDPipe({version: '4'})) id: string){
    return this.productsService.findByProvider(id);
  }

  @Auth(ROLES.EMPLOYEE, ROLES.MANAGER)
  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe({version: '4'})) productId: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(productId, updateProductDto);
  }

  @Auth(ROLES.MANAGER)
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({version: '4'})) productId: string) {
    return this.productsService.remove(productId);
  }
}
