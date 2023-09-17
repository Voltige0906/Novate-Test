import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
import { StockSchema } from 'src/stocks/schemas/stock.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:'Product', schema: ProductSchema}]),
  MongooseModule.forFeature([{name:'Stock', schema: StockSchema}])
],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
