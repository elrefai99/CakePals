import { Request } from 'express'

export interface AuthDataStore {
    _id: string
}

export interface AuthRequest extends Request {
    user: AuthDataStore
}