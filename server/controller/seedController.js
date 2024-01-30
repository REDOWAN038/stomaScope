const userModel = require("../models/userModel")
const data = require("../src/data")

const seedUser = async(req,res,next)=>{
	try {
		await userModel.deleteMany({})
		const users = await userModel.insertMany(data.users)
		return res.status(201).json({
			success : true,
			users
		})
	} catch (error) {
		next(error)
	}
}

module.exports = {seedUser}