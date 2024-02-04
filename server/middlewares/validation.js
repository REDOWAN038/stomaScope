const {body} = require("express-validator")

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
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    // .withMessage("Password must be at least 8 characters, contain a lowercase letter, an uppercase letter, a number, and a special character"),

    body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone is required")
    // .matches(/^01\d{9}$/)
    // .withMessage("Invalid phone number format. Must be 11 digits starting with 01."),
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