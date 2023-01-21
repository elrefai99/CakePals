import jwt from 'jsonwebtoken'

export var maxAge = 15 * 24 * 60 * 60 * 1000

export const TokenUserId = (_id) => {
    const token_secret = process.env.TokenSecret
    return jwt.sign({ _id }, token_secret, {expiresIn: maxAge})
} 

export const EmailUser = (email) =>{
    const token_secret = process.env.TokenSecret
    return jwt.sign({ email }, token_secret, { expiresIn: maxAge })
}