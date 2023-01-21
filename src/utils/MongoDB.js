import mongoose from "mongoose";

export default (app) => {
    const port = process.env.PORT || 1999;

    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_PATH,
        { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            app.listen(port, () => {
                console.log('listening on port: ' + process.env.Server_URL)
            })
        }).catch(err => console.log(err))
}