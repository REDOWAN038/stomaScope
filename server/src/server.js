// const connectDB = require("../config/connectDB")
const app = require("./app")
const { port } = require("./secret")

app.listen(port,async()=>{
    try {
        // await connectDB()
        console.log(`server is listening at http://localhost:${port}`)
    } catch (error) {
        console.log(error);
    }
})