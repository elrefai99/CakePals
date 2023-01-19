import { Application } from 'express'
import AuthRouters from '../Routers/Auth/Auth.routes'
import UserRouters from '../Routers/User/User.routes'
import SearchRouters from '../Routers/serach/search.routes'

export default (app: Application) =>{
    app.use('/api', AuthRouters)
    app.use('/api', UserRouters)
    app.use('/api', SearchRouters)
}