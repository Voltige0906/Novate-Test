import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock } from './schemas/stock.schema';
import mongoose from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';

@Injectable()
export class StocksService {
    constructor(
        @InjectModel(Stock.name)
        private stockModel: mongoose.Model<Stock>,
        @InjectModel(Product.name)
        private productModel : mongoose.Model<Product>

    ){}

    async findAll(): Promise <Stock[]> {
        const products = await this.stockModel.find();
        return products


    }

    async updateById(id: string, stock: Stock): Promise<Stock> {
        return await this.stockModel.findByIdAndUpdate(id, stock, {
          new: true,
          runValidators: true,
        });
    }


    async create(product:Stock): Promise<Stock> {
        const stock = await this.stockModel.create(product)
        console.log(stock.product)
        const prod = await this.productModel.findById(stock.product)
        console.log(prod)
        stock.product = prod
        return stock
    }

    async findById(id: string): Promise<Stock> {
        const stock = await this.stockModel.findById(id);
    
        if (!stock) {
          throw new NotFoundException('stock not found.');
        }
    
        return stock;
    }
}
