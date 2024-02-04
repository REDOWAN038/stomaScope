const express = require("express")
const { registerUser, activateUserAccount, handleUploadFile } = require("../controller/userController")
const { validateUserRegistration, validateFileUpload } = require("../middlewares/validation")
const { runValidation } = require("../middlewares")
const { isLoggedIn, isLoggedOut } = require("../middlewares/auth")
const { uploadImage } = require("../middlewares/uploadImage")
const router = express.Router()

// register an user
router.post("/register", isLoggedOut, validateUserRegistration, runValidation,registerUser)

// activate user account
router.post("/activate", isLoggedOut, activateUserAccount)

// upload file
router.post("/upload", uploadImage.single("image"), isLoggedIn, handleUploadFile)

module.exports = router