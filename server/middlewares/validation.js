const { body } = require("express-validator")

// validate user registration input
const validateUserRegistration = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Emails is not valid"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Pasword is required"),
]

const validateFileUpload = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    // body("image")
    // .notEmpty()
    // .withMessage("image is required bro"),

]

module.exports = {
    validateUserRegistration,
    validateFileUpload
}