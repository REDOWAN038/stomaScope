const express = require("express")
const { isLoggedIn } = require("../middlewares/auth")
const {  handleUploadFile, handleDeleteFile } = require("../controller/fileController")
const { uploadImage } = require("../middlewares/uploadImage")
const router = express.Router()


// upload file
router.post("/upload", uploadImage.single("image"), isLoggedIn, handleUploadFile)

// delete file
router.delete("/delete/:id", isLoggedIn, handleDeleteFile)

module.exports = router