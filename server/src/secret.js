require("dotenv").config()

const port = process.env.PORT || 3001
const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/StomaScope"

module.exports = {
    port,
    mongoURL
}