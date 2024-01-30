const express = require("express")
const { registerUser, activateUserAccount } = require("../controller/userController")
const { validateUserRegistration } = require("../middlewares/auth")
const { runValidation } = require("../middlewares")
const router = express.Router()

// register an user
router.post("/register", validateUserRegistration, runValidation,registerUser)

// activate user account
router.post("/activate", activateUserAccount)

module.exports = router