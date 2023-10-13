const express = require('express');

const userRoute = require('./users');
const mailRoute = require('./mail');
const productRoute = require('./product');
const authRoute = require('./auth');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/mail', mailRoute);
router.use('/user', userRoute);
router.use('/product', productRoute);
router.use('/auth', authRoute);

module.exports = router;
