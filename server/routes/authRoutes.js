const express = require("express")
const { handleLogin, handleLogout } = require("../controller/authController")
const { isLoggedOut, isLoggedIn } = require("../middlewares/auth")
const router = express.Router()

// user login
router.post("/login", isLoggedOut, handleLogin)

// user logout
router.get("/logout", isLoggedIn, handleLogout)

module.exports = router