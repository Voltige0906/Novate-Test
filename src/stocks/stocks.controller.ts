import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Stock } from './schemas/stock.schema';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stocks')
export class StocksController {
    constructor(private stockService: StocksService){}
    // api to have a list of all the stocks
    @Get()
    async getAllStocks(): Promise<Stock[]>{
        return this.stockService.findAll()
    }
    //api to create a create a stock
    @Post('create')
    async createStock (
        @Body()
        stock: CreateStockDto
    ): Promise<Stock>{
        return this.stockService.create(stock)
    }
    //api to find a stock by using it's Id
    @Get(':id')
    async getSockById(
    @Param('id')
    id: string,
    ): Promise<Stock> {
    return this.stockService.findById(id);
    }

   //api to modify a stock and to add a product to the stock. Astock can only have one product but a product can be in many stocks
    @Put(':id')
    async updateStock(
    @Param('id')
    id: string,
    @Body()
    stock: UpdateStockDto,
    )  : Promise<Stock> {
    return this.stockService.updateById(id, stock);
    }
}
