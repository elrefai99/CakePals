import { Schema } from "mongoose";
import { RatingModel } from "./Rating.model.js";

const RatingProductsSchema = new Schema({
    IdProducts: {
        type: Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
})

export const RatingProductsModel = RatingModel.discriminator('RatingProducts', RatingProductsSchema)