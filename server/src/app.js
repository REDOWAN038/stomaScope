const express = require("express")
const createError = require('http-errors')
const morgan = require("morgan")
const rateLimit = require("express-rate-limit")
const cookieParser = require("cookie-parser")
const app = express()

const userRoutes = require("../routes/userRoutes")
const seedRoutes = require("../routes/seedRoutes")
const authRoutes = require("../routes/authRoutes")
const { errorResponse } = require("../handler/responseHandler")

const limiter = rateLimit({
	windowMs : 1*60*1000,
	max : 5,
	message : "too many requests"
})

// middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(limiter)
app.use(cookieParser())

// routes
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/seed",seedRoutes)
app.use("/api/v1/auth",authRoutes)

app.get("/api/v1/test",(req,res)=>{
    res.status(200).json({
        message : "welcome to the server"
    })
})

// handling client error
app.use((req,res,next)=>{
	createError(404, "route not found")
	next()
})

// handling server error
app.use((err,req,res,next)=>{
    return errorResponse(res,{
        statusCode : err.status,
        message : err.message
    })
})

module.exports = app