import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Product, ProductSchema } from "src/products/schemas/product.schema";




@Schema()
export class Stock{
    @Prop({required:true})
    name: string;

    @Prop()
    quantity: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product'})
    product: Product;



}

export const StockSchema = SchemaFactory.createForClass(Stock);