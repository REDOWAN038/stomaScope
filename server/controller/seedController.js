const userModel = require("../models/userModel")
const fileModel = require("../models/fileModel")
const data = require("../src/data")
const cloudinary = require("../config/cloudinary")

const seedUser = async (req, res, next) => {
    try {
        const cookies = req.cookies
        for (const cookieName in cookies) {
            res.clearCookie(cookieName)
        }
        await userModel.deleteMany({})
        await fileModel.deleteMany({})
        await cloudinary.api.delete_resources_by_prefix('stomaScope/images/')
        await cloudinary.api.delete_resources_by_prefix('stomaScope/videos/')

        const users = await userModel.insertMany(data.users)
        return res.status(201).json({
            success: true,
            users
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { seedUser }