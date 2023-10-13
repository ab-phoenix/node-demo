const axios = require('axios').default;

const login = async (reqBody) => {
	try {
		const { username, password } = reqBody;

    const response = await axios.request({
      url: `https://dummyjson.com/auth/login`,
      method: 'POST',
      data: {
        username, password
      }
    });

    if (response.status === 200) {
      return { statusCode: 200,  data: response?.data };
    }

	} catch (error) {
		return Promise.reject(error);
	}
}

module.exports = {
	login,
}