import { Application } from 'express'
import AuthRouters from '../Routers/Auth/Auth.routes'
import UserRouters from '../Routers/User/User.routes'

export default (app: Application) =>{
    app.use('/api', AuthRouters)
    app.use('/api', UserRouters)
}