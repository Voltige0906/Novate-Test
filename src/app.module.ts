import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://maela:Zoubalous0906@cluster0.64at0ca.mongodb.net/?appName=MongoDB+Compass'),
    ProductsModule,
    StocksModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
