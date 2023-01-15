import { Application } from 'express'
import AuthRouters from '../Routers/Auth/Auth.routes'

export default (app: Application) =>{
    app.use('/api', AuthRouters)
}