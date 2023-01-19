import { Schema, model } from 'mongoose'
import { ProductsInterface } from '../../Interface/Products'

const ProductSchema: Schema<ProductsInterface> = new Schema({
    Owner: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    ProductName: {
        type: String,
        required: true,
    },
    ProductType: {
        type: String,
        required: true,
    },
    ProductCost: {
        type: Number,
        default: 0,
        required: true,
    },
    ProductBakingTime: {
        type: Date,
        required: true,
    },
    Location: {
        type: String,
        required: true,
    },
    Phone: {
        type: String,
        required: true,
    },
    ProductsImage: {
        type: [String],
        required: true,
    },
}, {
    timestamps: true,
})

export const ProductModel = model<ProductsInterface>('Product', ProductSchema)