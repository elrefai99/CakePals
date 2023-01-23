import AuthRoute from '../Routers/Auth/Auth.routes.js'
import UserRoute from '../Routers/User/User.routes.js'
import RatingRoute from '../Routers/Rating/Rating.routes.js'
import ProductsRoute from '../Routers/Products/Products.routes.js'

export default (app) => {
    app.use('/api', AuthRoute)
    app.use('/api', UserRoute)
    app.use('/api', RatingRoute)
    app.use('/api', ProductsRoute)
}