const express = require("express")
const { isLoggedIn } = require("../middlewares/auth")
const { handleUploadFile, handleDeleteFile } = require("../controller/fileController")
const { uploadFile } = require("../middlewares/uploadFile")
const router = express.Router()


// upload file
router.post("/upload", uploadFile.single("filePath"), isLoggedIn, handleUploadFile)

// delete file
router.delete("/delete/:id", isLoggedIn, handleDeleteFile)

module.exports = router