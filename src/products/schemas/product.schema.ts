import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema()
export class Product{
    @Prop({required:true})
    name: string;

    @Prop()
    price: number;

    @Prop()
    code: string;

    @Prop()
    description: string;

    @Prop()
    rawPrice: number;

    @Prop()
    subCategory: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
