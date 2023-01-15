import { connect, set, ConnectOptions } from 'mongoose'
import { Application } from 'express'

export default (app: Application) => {
    const port = process.env.PORT || 1999

    set('strictQuery', false)
    const MongoDB_URL = process.env.MONGO_PATH as string
    connect(MongoDB_URL, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions,
        ).then(() => {
            app.listen(port, () => {
                console.log('listening Server on URL: ' + process.env.Server_URL)
            })
        }).catch(err => console.log(err))
}