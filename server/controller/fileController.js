const { getPublicId } = require("../handler/cloudinaryHelper")
const fileModel = require("../models/fileModel")
const createError = require("http-errors")
const cloudinary = require("../config/cloudinary")
const { successResponse } = require("../handler/responseHandler")


// delete file
const deleteFile = async(req,res,next)=>{
    try {
        const {userId} = req.body
        const {id} = req.params
        const existingFile = await fileModel.findById(id)

        if(!existingFile){
            throw createError(404, "invalid file id")
        }
        
        if(userId!==existingFile.uploader.toString()){
            throw createError(401, "unauthorize")
        }

        const publicId = await getPublicId(existingFile.image)

        const {result} = await cloudinary.uploader.destroy(`stomaScope/images/${publicId}`)

        if(result!=="ok"){
            throw createError(400, "please try again")
        }

        await fileModel.findByIdAndDelete(id)

        return successResponse(res,{
            statusCode:200,
            message:"file deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    deleteFile
}