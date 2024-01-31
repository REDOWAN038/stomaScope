const createError = require("http-errors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const userModel = require("../models/userModel")
const { successResponse } = require("../handler/responseHandler")
const { createJWT } = require("../handler/jwt")
const { jwtAccessKey } = require("../src/secret")

// user login functionality
const handleLogin = async(req,res,next)=>{
    try {
        const {email, password} = req.body

        const user = await userModel.findOne({email})

        if(!user){
            throw createError(404, "user with this email does not registered")
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if(!isPasswordMatched){
            throw createError(401, "wrong password")
        }

        // creating token and set up in cookies
        const accessToken = createJWT({email}, jwtAccessKey,"10m")
        res.cookie("accessToken", accessToken,{
            maxAge : 30*60*1000,  // expires in 30 minutes
            httpOnly : true,
            secure : true,
            sameSite : "none"
        })

        return successResponse(res, {
            statusCode : 200,
            message : "user logged in successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    handleLogin
}