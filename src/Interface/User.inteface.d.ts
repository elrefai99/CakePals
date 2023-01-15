import { Document } from 'mongoose'

export interface AddressInterface {
    street: string
    city: string
}

export interface RatingInterface {
    star: number
    BakerId: string
}

export default interface UserInterface {
    username: string
    email: string
    password: string
    profileImageUrl: string
    location: AddressInterface
    PhoneNumbers: string
    followers: string[]
    following: string[]
}

export interface memberInterface extends UserInterface {
    gender: 'm' | 'f'
}

export interface BakerInterface extends UserInterface {
    isBaker: boolean
}

export interface toJSON_User extends UserInterface, Document {
    toJSON: () => any // any for now
}