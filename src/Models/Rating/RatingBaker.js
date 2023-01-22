import { Schema, model } from "mongoose";
import { RatingModel } from "./Rating.model.js";

const RatingBakerSchema = new Schema({
    IdBaker: {
        type: Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
})

export const RatingBakerModel = RatingModel.discriminator('RatingBaker', RatingBakerSchema)