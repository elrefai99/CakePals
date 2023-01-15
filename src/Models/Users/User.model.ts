import { Schema, model } from 'mongoose'
import UserInterface from '../../Interface/User.inteface'
import { AddressInterface } from '../../Interface/User.inteface'

export const AddressSchema: Schema<AddressInterface> = new Schema({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
})

export const UserSchema: Schema<UserInterface> = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageUrl: {
        type: String,
        default: 'https://firebasestorage.googleapis.com/v0/b/start-d51cf.appspot.com/o/blank-profile-picture-973460_1280.webp?alt=media&token=22700836-8469-41fe-9e25-25cbb6f1b80e',
    },
    location: AddressSchema,

    PhoneNumbers: {
        type: String,
        required: true,
    },
    followers: {
        type: [String],
        required: true,
    },
    following: {
        type: [String],
        required: true,
    },
    token:{
        type: String,
    },
}, {
    timestamps: true,
})

export const UserModel = model<UserInterface>('user', UserSchema)
