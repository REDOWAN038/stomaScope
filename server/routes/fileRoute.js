const express = require("express")
const { isLoggedIn } = require("../middlewares/auth")
const { deleteFile } = require("../controller/fileController")
const router = express.Router()

// delete file
router.delete("/delete/:id", isLoggedIn, deleteFile)

module.exports = router