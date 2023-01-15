import { UserModel } from './User.model'
import { memberInterface } from './../../Interface/User.inteface.d'
import { Schema } from 'mongoose'

export const MemberSchema: Schema<memberInterface> = new Schema({
    gender: {
        type: String,
        required: true,
    },
})

export const MemberModel = UserModel.discriminator('Member', MemberSchema)