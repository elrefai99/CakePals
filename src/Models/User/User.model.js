import { Schema, model } from "mongoose";

const AddressSchema = new Schema({
    street: {
        type: String,
        required: true        
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

const userSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    ProfileImage: {
        type: String,
        default: "https://res.cloudinary.com/cs74as-sjoaaaaaaaaaaaadsa/image/upload/v1674308757/255009814_2637816473181056_4141652972517303957_n_miwbl6.jpg"
    },
    Address: AddressSchema,
    
    
    PhoneNumber: {
        type: String,
        required: true,
        max: 12
    },
    Followers: {
        type: Array,
        default: []
    },
    Followings: {
        type: Array,
        default: []
    },
    token: {
        type: String,
    }
}, {
    timestamps: true,
})
const UserModel = model('User', userSchema)
export default UserModel