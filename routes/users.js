const express = require('express');

const auth = require('../middleware/auth');

const router = express.Router();

/* GET users listing. */
router.get('/', auth, (req, res, next) => {
  res.status(200).json({ data: req.user });
});

module.exports = router;
