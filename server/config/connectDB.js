const mongoose = require("mongoose")
const { mongoURL } = require("../src/secret")

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL)
        console.log(`connected to mongodb database ${mongoose.connection.host}`)
        // for error
        mongoose.connection.on("error",(error)=>{
            console.error("db connection error : ", error)
        })
    } catch (error) {
        console.error("could not connect db : ", error.toString())
    }
}

module.exports = connectDB