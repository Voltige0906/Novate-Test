import { ApiProperty } from "@nestjs/swagger";



export class CreateProductDto{
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly price: number;

    @ApiProperty()
    readonly code: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly rawPrice: number;

    @ApiProperty()
    readonly subCategory: string;

    
}