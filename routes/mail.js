const express = require('express');
const { validate } = require('express-validation')

const validation = require('../validation/mail');

const mailController = require('../controller/mail');

const router = express.Router();


/* GET users listing. */
router.post('/send', validate(validation.sendMail), async (req, res, next) => {
  try {
    const response = await mailController.sendMail(req.body);

    if (response) {
      console.log('Email sent: ' + response);
      return res.status(200).json({ message: `Message send successfully` });
    }

  } catch (error) {
   next (error);
  }
});

module.exports = router;
