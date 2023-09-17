import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StockSchema } from './schemas/stock.schema';
import { ProductSchema } from 'src/products/schemas/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:'Stock', schema: StockSchema}]),
  MongooseModule.forFeature([{name:'Product', schema: ProductSchema}])
],
  controllers: [StocksController],
  providers: [StocksService]
})
export class StocksModule {}
