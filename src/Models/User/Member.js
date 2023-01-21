import { Schema } from "mongoose";
import UserModel from './User.model.js'

const MemberSchema = new Schema({
    gender: {
        type: String,
        required: true,
        default: 'm' | 'f'
    }
})

export const Member = UserModel.discriminator('Member', MemberSchema)