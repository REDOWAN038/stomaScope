const jwt = require("jsonwebtoken")

const createJWT = (payload, secretKey, expiresIn) =>{
	const token = jwt.sign(payload, secretKey, {expiresIn})
	return token
}

module.exports = {createJWT}