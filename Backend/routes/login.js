const controller = require('../sqlController/login');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/username/:value', controller.getByUserName);
router.get('/password/*****:', controller.getByPassWord);
// router.get('/UserRt/:value', controller.getByGetRating);
router.get('/:id', controller.getById);


// router.delete('/' , controller.delete);
// router.put('/', controller.update);

 router.post('/', controller.create);
//  router.post('/', controller.deleting);
//  router.post('/', controller.update);

module.exports = router;

