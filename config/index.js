module.exports = Object.freeze({
	port: process.env.PORT,
	dbUri: process.env.DB_URI,
	bcryptSaltRounds: process.env.BCRYPT_SALT_ROUNDS,
	jwt_Secret: process.env.JWT_SECRET,
	mailConfig: {
		MailService: process.env.MAIL_SERVICE,
		mailUser: process.env.MAIL_USER,
		mailPassword: process.env.MAIL_PASSWORD
	}
});
