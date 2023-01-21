import { Schema } from "mongoose";
import UserModel from './User.model.js'

const BakerSchema = new Schema({
    isBaker: {
        type: Boolean,
        required: true,
        default: false,
    }
})

export const Baker = UserModel.discriminator('Baker', BakerSchema)