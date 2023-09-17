import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}
    // aa api to have a list of all the products
    @Get()
    async getAllProducts(): Promise<Product[]>{
        return this.productService.findAll()
    }
    // an api to find a product using it's Id
    @Get(':id')
    async getProductById(
    @Param('id')
    id: string,
    ): Promise<Product> {
    return this.productService.findById(id);
    }
    //an api to find a product using it's stock Id
    @Get('stock/:idStock')
    async getProductByStockId(
    @Param('idStock')
    idStock: string,
    ): Promise<Product> {
    return this.productService.findByStockId(idStock);
    }
    // an api to create a product
    @Post('create')
    async createProduct (
        @Body()
        product: CreateProductDto
    ): Promise<Product>{
        return this.productService.create(product)
    }
    // an api to modify a product
    @Put(':id')
    async updateProduct(
    @Param('id')
    id: string,
    @Body()
    product: UpdateProductDto,
    )  : Promise<Product> {
    return this.productService.updateById(id, product);
    }
}
