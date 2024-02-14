const { getPublicId } = require("../handler/cloudinaryHelper")
const fileModel = require("../models/fileModel")
const createError = require("http-errors")
const cloudinary = require("../config/cloudinary")
const { successResponse } = require("../handler/responseHandler")
const {PythonShell} = require("python-shell")
const {spawn} = require("child_process")

function process(imagePath) {
    return new Promise((resolve, reject) => {
        let dataBuffer = ''; // Buffer to accumulate data from stdout

        const pythonProcess = spawn('python', ['/Users/red2724/Desktop/code/git/stomaScope/server/scripts/processImage.py', imagePath]);

        pythonProcess.stdout.on('data', (data) => {
            dataBuffer += data.toString(); // Append data to buffer
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
            reject(data.toString());
        });

        pythonProcess.on('close', (code) => {
            console.log(`Python script exited with code ${code}`);
            if (code === 0) {
                resolve(dataBuffer); // Resolve with accumulated data
            } else {
                reject(`Python script exited with non-zero code ${code}`);
            }
        });
    });
}

// handle upload file
const handleUploadFile = async(req,res,next)=>{
    try {
        const {name, userId} = req.body
        const image = req.file?.path
        const newFile = {name,image,uploader:userId}

        const output = await process(image)

        if(output){
            console.log("output ", typeof(output));
            console.log("image ", typeof(image));
            const response = await cloudinary.uploader.upload(output,{
                folder : "stomaScope/images"
            })
            newFile.image = response.secure_url
        }

        const file = await fileModel.create(newFile)
        return successResponse(res,{
            statusCode:200,
            message:"file uploaded successfully",
            payload:{file}
        })
    } catch (error) {
        next(error)
    }
}

// delete file
const handleDeleteFile = async(req,res,next)=>{
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
    handleUploadFile,
    handleDeleteFile
}