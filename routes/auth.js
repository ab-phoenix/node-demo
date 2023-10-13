const express = require('express');
const { validate } = require('express-validation')

const validation = require('../validation/auth');

const authController = require('../controller/auth');

const router = express.Router();


/* GET users listing. */
router.post('/login', validate(validation.login), async (req, res, next) => {
  try {
    const data = await authController.login(req.body);

    return res.status(200).json({ message: `Login successfully`, data });
    //
  } catch (error) {
   next (error);
  }
});

module.exports = router;
