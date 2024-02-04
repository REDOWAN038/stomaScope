const multer = require("multer")
const { allowedImageTypes, uploadUserImageMaxSize } = require("../config/file")


const imageStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/public/images')
//   },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const imageFileFilter = (req,file,cb)=>{
    if(!file.mimetype.startsWith("image/")){
        return cb(new Error("only image file is required"), false)
    }
    if(!allowedImageTypes.includes(file.mimetype)){
        return cb(new Error("image type is not allowed"), false)
    }

    cb(null, true)
}

const uploadImage = multer({ 
    storage: imageStorage,
    limits : {fileSize : uploadUserImageMaxSize},
    fileFilter : imageFileFilter
})

module.exports = {uploadImage}