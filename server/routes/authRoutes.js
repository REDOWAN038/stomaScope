const express = require("express")
const { handleLogin, handleLogout } = require("../controller/authController")
const router = express.Router()

// user login
router.post("/login", handleLogin)

// user logout
router.post("/logout", handleLogout)

module.exports = router