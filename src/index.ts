import 'dotenv/config'
import express, { Application } from 'express'
import MongoDB from './Utils/MongoDB'
import Setups from './Utils/Setups'
import indexHook from './Hooks/index.hook'

const app: Application = express()

MongoDB(app)

Setups(app)

indexHook(app)