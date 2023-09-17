import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/products/schemas/product.schema";


export class CreateStockDto{
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly quantity: number;
    
    @ApiProperty()
    readonly product: Product;
}