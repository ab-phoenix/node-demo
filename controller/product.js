const axios = require('axios').default;

const getAllProducts = async (queryParams) => {
	try {
		const { page, perPage } = queryParams;

    const limit = perPage;
    const skip = page === 1 ? 0 : (page * perPage);

    const response = await axios.request({
      url: `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    });

    if (response.status === 200) {
      const { products, total } = response?.data || {};
      return { statusCode: 200, total, data: products };
    }

	} catch (error) {
		return Promise.reject(error);
	}
}

module.exports = {
	getAllProducts,
}