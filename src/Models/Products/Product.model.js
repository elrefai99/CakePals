import {Schema, model} from 'mongoose'

const ProductSchema = new Schema({
    OwnerID: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    ProductName: {
        type: String,
        required: true
    },
    ProductCost: {
        type: Number,
        default: 0,
        required: true
    },
    ProductType: {
        type: String,
        required: true
    },
    ProductBakingTime: {
        type: String,
        required: true
    },
    ProductImages: {
        type: Array,
        default: [],
        required: true
    },
    ProductDescription: {
        type: String,
        required: true
    },
    ProductPhoneNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

export const ProductModel = model('Product', ProductSchema) 