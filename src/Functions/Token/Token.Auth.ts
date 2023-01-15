import * as jwt from 'jsonwebtoken'
import { AuthDataStore } from '../../@types/Auth'

export const maxAge: number = 30 * 24 * 60 * 60 

export const TokenIdOfAuth = (_id: AuthDataStore ) => {
    const tokenSecret = process.env.TokenSecret as string

    return jwt.sign({ _id }, tokenSecret, { expiresIn: maxAge } )
}