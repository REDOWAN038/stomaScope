const express = require("express")
const { seedUser } = require("../controller/seedController")
const router = express.Router()

router.post("/", seedUser)

module.exports = router