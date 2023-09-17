import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import * as mongoose from 'mongoose';
import { create } from 'domain';
import { Stock } from 'src/stocks/schemas/stock.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name)
        private productModel: mongoose.Model<Product>,
        @InjectModel(Stock.name)
        private stockModel: mongoose.Model<Stock>
    ){}
    async findAll(): Promise <Product[]> {
        const products = await this.productModel.find();
        return products


    }

    async create(product:Product): Promise<Product> {
        const prod = await this.productModel.create(product)
        return prod
    }

    async findById(id: string): Promise<Product> {
        const product = await this.productModel.findById(id);
    
        if (!product) {
          throw new NotFoundException('Product not found.');
        }
    
        return product;

    }
    async findByStockId(idStock: string): Promise<Product> {
        const stock = await this.stockModel.findById(idStock)
        if (!stock) {
            throw new NotFoundException('Stock not found or product is not in stock yet.');
          }
        console.log(stock.product)
        const product = await this.productModel.findById(stock.product)
        return product
    }

    async updateById(id: string, product: Product): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, product, {
          new: true,
          runValidators: true,
        });
    }
}
