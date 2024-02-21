const createError = require("http-errors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const userModel = require("../models/userModel")
const { successResponse } = require("../handler/responseHandler")
const { createJWT } = require("../handler/jwt")
const { jwtAccessKey } = require("../src/secret")

// user login functionality
const handleLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            throw createError(404, "user with this email does not registered. please sign up")
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if (!isPasswordMatched) {
            throw createError(401, "wrong password. try again!!!")
        }

        // creating token and set up in cookies
        const accessToken = createJWT({ _id: user._id }, jwtAccessKey, "1h")
        res.cookie("accessToken", accessToken, {
            maxAge: 60 * 60 * 1000,  // expires in 30 minutes
            httpOnly: true,
            // secure: true,
            // sameSite: "none"
        })

        return successResponse(res, {
            statusCode: 200,
            message: `welcome back, ${user.name}`,
        })
    } catch (error) {
        next(error)
    }
}

// user logout
const handleLogout = async (req, res, next) => {
    try {
        res.clearCookie("accessToken")
        return successResponse(res, {
            statusCode: 200,
            message: "logged out successfully",
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    handleLogin,
    handleLogout
}