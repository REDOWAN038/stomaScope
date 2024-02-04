const createError = require("http-errors")
const jwt = require("jsonwebtoken")
const { jwtAccessKey } = require("../src/secret")

const isLoggedIn = async(req,res,next)=>{
    try {
        const token = req.cookies.accessToken
        if(!token){
            throw createError(401, "user is not logged in")
        }

        const decoded = jwt.verify(token, jwtAccessKey)
        if(!decoded){
            throw createError(401, "invalid token")
        }

        req.body.userId = decoded._id
        next()
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    isLoggedIn
}