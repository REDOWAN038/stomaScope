const express = require("express")
const { handleLogin } = require("../controller/authController")
const router = express.Router()

// user login
router.post("/login", handleLogin)

module.exports = router