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

        const isUser = await userModel.findOne({ email })

        if (!isUser) {
            throw createError(404, "user with this email does not registered. please sign up")
        }

        const isPasswordMatched = await bcrypt.compare(password, isUser.password)

        if (!isPasswordMatched) {
            throw createError(401, "wrong password. try again!!!")
        }

        // creating token and set up in cookies
        const accessToken = createJWT({ _id: isUser._id }, jwtAccessKey, "24d")
        res.cookie("accessToken", accessToken, {
            maxAge: 24 * 24 * 60 * 60 * 1000,  // expires in 24 days
            httpOnly: true,
            // secure: true,
            // sameSite: "none"
        })

        const user = isUser.toObject()
        delete user.password

        return successResponse(res, {
            statusCode: 200,
            message: `welcome back, ${user.name}`,
            payload: {
                user
            }
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