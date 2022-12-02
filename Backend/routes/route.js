const controller = require('../sqlController/user');
var express = require('express');
var router = express.Router();

router.get('/', controller.getALL);
// router.get('/desc/:value', controller.getByDesc);
router.get('/:id', controller.getById);
module.exports = router;

