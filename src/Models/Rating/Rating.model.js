import { Schema, model } from "mongoose";

const RatingSchema = new Schema({
    star: {
        type: Number,
        default: 0,
        min: 1,
        max: 5
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    Comments: {
        type: String
    }
}, {
    timestamps: true,
})

export const RatingModel = model('Rating', RatingSchema)