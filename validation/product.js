const { Joi } = require('express-validation')

module.exports = {
	getAllProducts: {
		query: Joi.object({
			page: Joi.number().required(),
			perPage: Joi.number().required(),
		})
	}
}