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
        .withMessage("Name is required")
]

const validateUserResetPassword = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Emails is not valid"),

    body("newPassword")
        .trim()
        .notEmpty()
        .withMessage("New Pasword is required"),

    body("confirmPassword")
        .trim()
        .notEmpty()
        .withMessage("Confirm Pasword is required"),

]

module.exports = {
    validateUserRegistration,
    validateFileUpload,
    validateUserResetPassword
}