import { UserModel } from './User.model'
import { BakerInterface } from './../../Interface/User.inteface.d'
import { Schema } from 'mongoose'

export const BakerSchema: Schema<BakerInterface> = new Schema({
    isBaker: {
        type: Boolean,
        default: false,
    },
})

export const BakerModel = UserModel.discriminator('Baker', BakerSchema)