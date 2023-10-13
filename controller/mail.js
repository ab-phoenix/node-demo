const nodemailer = require('nodemailer');

const config = require('../config');

const sendMail = async (payload) => {
	try {
		const { to, subject, message } = payload;

    const transporter = nodemailer.createTransport({
      service: config.mailConfig.MailService,
      auth: {
        user: config.mailConfig.mailUser,
        pass: config.mailConfig.mailPassword
      }
    });

    const mailOptions = {
      from: 'Abhishek <abhishek.mohata@yopmail.com>',
      to,
      subject,
      html: message
    };

    const response = await transporter.sendMail(mailOptions);

		return response

	} catch (error) {
		return Promise.reject(error);
	}
}

module.exports = {
	sendMail,
}