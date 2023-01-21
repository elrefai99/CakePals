import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'

export default (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended:  true }))
    app.use(morgan('dev'))
    app.use(cookieParser())
    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    }))
    app.use(helmet())
}