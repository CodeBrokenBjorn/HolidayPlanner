const controller = require('../sqlController/user');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/title/:value', controller.getByUserName);
router.get('/body/:value', controller.getByPassWord);
// router.get('/UserRt/:value', controller.getByGetRating);
router.get('/:id', controller.getById);

// router.post('/', controller.create);
// router.post('/', controller.deleting);
// router.post('/', controller.update);

module.exports = router;

