const express = require("express")
const { registerUser, activateUserAccount, getUserByID, getUserUploadHistory, resetPassword, resetPasswordConfirmation } = require("../controller/userController")
const { validateUserRegistration, validateFileUpload, validateUserResetPassword } = require("../middlewares/validation")
const { runValidation } = require("../middlewares")
const { isLoggedIn, isLoggedOut } = require("../middlewares/auth")
const router = express.Router()

// register an user
router.post("/register", isLoggedOut, validateUserRegistration, runValidation, registerUser)

// activate user account
router.post("/activate", isLoggedOut, activateUserAccount)

//reset password
router.put("/reset-password", isLoggedOut, validateUserResetPassword, runValidation, resetPassword)

// reset password confirmation
router.put("/reset-password-confirmation", isLoggedOut, resetPasswordConfirmation)

// get user profile
router.get("/profile", isLoggedIn, getUserByID)

// get user upload history
router.get("/history/:type", isLoggedIn, getUserUploadHistory)

module.exports = router