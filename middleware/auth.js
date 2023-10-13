const axios = require('axios').default;
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
	try {
		const { authorization } = req.headers;
		if (!authorization) throw new Error('unauthorized');

		const token = authorization.split(' ')[1];

		const jwtPayload = jwt.decode(token);

		const response = await axios.request({
      url: `https://dummyjson.com/users/${jwtPayload.id}`,
    });

		req.user = response.data;

		next();
	} catch (error) {
		next(error);
	}
};