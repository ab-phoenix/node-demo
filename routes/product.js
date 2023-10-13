const express = require('express');
const { validate } = require('express-validation')

const validation = require('../validation/product');

const productController = require('../controller/product');

const router = express.Router();


/* GET users listing. */
router.get('/', validate(validation.getAllProducts, { context: true }), async (req, res, next) => {
  try {
    const data = await productController.getAllProducts(req.query);

    return res.status(200).json(data);
    //
  } catch (error) {
   next (error);
  }
});

module.exports = router;
