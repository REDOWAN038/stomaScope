const nodemailer = require("nodemailer");
const { smtpUser, smtpPassword } = require("../src/secret");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		// TODO: replace `user` and `pass` values from <https://forwardemail.net>
		user: smtpUser,
		pass: smtpPassword,
	},
})

const sendingMail = async(emailData)=>{
	try {
		const info = await transporter.sendMail({
		from: smtpUser, // sender address
		to: emailData.email, // list of receivers
		subject: emailData.subject, // Subject line
		html: emailData.html, // html body
	});

	console.log("message sent : %s", info.response);

	} catch (error) {
		throw error
	}
}

module.exports = {
	sendingMail
}