const multer = require("multer")
const { allowedFileTypes, uploadFileMaxSize } = require("../config/file")


const fileStorage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const uploadFileFilter = (req, file, cb) => {
  if (!(file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/"))) {
    return cb(new Error("only image or video file is required"), false)
  }
  if (!allowedFileTypes.includes(file.mimetype)) {
    return cb(new Error("file type is not allowed"), false)
  }

  cb(null, true)
}

const uploadFile = multer({
  storage: fileStorage,
  limits: { fileSize: uploadFileMaxSize },
  fileFilter: uploadFileFilter
})

module.exports = { uploadFile }