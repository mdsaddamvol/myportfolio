// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default (req, res) => {
	const { name, email, text } = req.body;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	const mailOption = {
		from: `${process.env.EMAIL}`,
		to: "mdsaddamvoltas@gmail.com",
		subject: `New mail from ${email}`,
		text: `
    ${name} wrote:
    ${text}
    `,
	};

	transporter.sendMail(mailOption, (err, data) => {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			res.send(data);
			console.log(req.body);
		}
	});

	console.log(name, email, text);
};
