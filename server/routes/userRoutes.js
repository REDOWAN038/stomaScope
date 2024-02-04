const express = require("express")
const { registerUser, activateUserAccount, handleUploadVideo } = require("../controller/userController")
const { validateUserRegistration } = require("../middlewares/validation")
const { runValidation } = require("../middlewares")
const { isLoggedIn } = require("../middlewares/auth")
const router = express.Router()

// register an user
router.post("/register", validateUserRegistration, runValidation,registerUser)

// activate user account
router.post("/activate", activateUserAccount)

// upload video
router.post("/upload", isLoggedIn, handleUploadVideo)

module.exports = router