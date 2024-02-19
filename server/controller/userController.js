const createError = require("http-errors")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const userModel = require("../models/userModel")
const fileModel = require("../models/fileModel")
const { successResponse } = require("../handler/responseHandler")
const { default: mongoose } = require("mongoose")
const { createJWT } = require("../handler/jwt")
const { jwtActivationKey, clientURL } = require("../src/secret")
const { sendingMail } = require("../handler/email")
const cloudinary = require("../config/cloudinary")

// register a user
const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, phone } = req.body

        const existingUser = await userModel.findOne({
            $or: [
                { email },
                { phone }
            ]
        })

        if (existingUser) {
            throw createError(409, "user already exists by this mail or phone")
        }

        const newUser = { name, email, password, phone }

        const token = createJWT(newUser, jwtActivationKey, "10m")

        const emailData = {
            email,
            subject: "Activate Your Account",
            html: `
            <h2> Hello ${name} </h2>
            <p> please click here to <a href="${clientURL}/api/v1/users/activate/${token}" target="_blank"> activate your account </a> </p>
            `
        }

        try {
            // await sendingMail(emailData)

        } catch (error) {
            createError(500, "failed to send activation email")
            next()
            return
        }

        return successResponse(res, {
            statusCode: 200,
            message: "please check your email",
            payload: { token }
        })
    } catch (error) {
        next(error)
    }
}

// activate user
const activateUserAccount = async (req, res, next) => {
    try {
        const token = req.body.token

        if (!token) {
            throw createError(404, "token is not found")
        }

        const decoded = jwt.verify(token, jwtActivationKey)
        const existingUser = await userModel.findOne({
            email: decoded.email
        })

        if (existingUser) {
            throw createError(409, "user already exists by this mail")
        }
        const user = await userModel.create(decoded)

        return successResponse(res, {
            statusCode: 201,
            message: "user registered successfully"
        })
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            next(createError(401, "Token has expired"))
        } else if (error.name === "JsonWebTokenError") {
            next(createError(401, "Inavlid Token"))
        } else {
            next(error)
        }
    }
}

// get single user 
const getUserByID = async (req, res, next) => {
    try {
        const { userId } = req.body
        const options = { password: 0 }
        const user = await userModel.findById(userId, options)

        return successResponse(res, {
            statusCode: 200,
            message: "user returned successfully",
            payload: { user }
        })
    } catch (error) {
        next(error)
    }
}

// get user upload history
const getUserUploadHistory = async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1
        const limit = 6

        const { userId } = req.body
        const history = await fileModel
            .find({ uploader: userId })
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit)
        const total = await fileModel.find({ uploader: userId }).countDocuments()

        return successResponse(res, {
            statusCode: 200,
            message: "user upload history returned",
            payload: {
                history: history,
                currentPage: page,
                totalPages: Math.ceil(total / limit)
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    registerUser,
    activateUserAccount,
    getUserByID,
    getUserUploadHistory
}