const { Joi } = require('express-validation')

module.exports = {
	sendMail: {
		body: Joi.object({
			to: Joi.string().email().required(),
			subject: Joi.string().required(),
			message: Joi.string().required()
		})
	}
}