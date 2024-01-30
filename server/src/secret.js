require("dotenv").config()

const port = process.env.PORT || 3001
const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/StomaScope"
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY
const smtpUser = process.env.SMTP_USER || ""
const smtpPassword = process.env.SMTP_PASS || ""
const clientURL = process.env.CLIENT_URL || ""


module.exports = {
    port,
    mongoURL,
    jwtActivationKey,
    smtpUser,
    smtpPassword,
    clientURL
}