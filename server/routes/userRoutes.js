const express = require("express")
const { registerUser, activateUserAccount, getUserByID, getUserUploadHistory } = require("../controller/userController")
const { validateUserRegistration, validateFileUpload } = require("../middlewares/validation")
const { runValidation } = require("../middlewares")
const { isLoggedIn, isLoggedOut } = require("../middlewares/auth")
const router = express.Router()

// register an user
router.post("/register", isLoggedOut, validateUserRegistration, runValidation,registerUser)

// activate user account
router.post("/activate", isLoggedOut, activateUserAccount)

// get user profile
router.get("/profile", isLoggedIn, getUserByID)

// get user upload history
router.get("/upload-history", isLoggedIn, getUserUploadHistory)

module.exports = router