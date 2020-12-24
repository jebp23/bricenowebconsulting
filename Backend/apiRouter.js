var express = require('express');
var formController = require('./apiController');

var router = express.Router();
router.post('/form', formController.sendEmail);


module.exports = router;