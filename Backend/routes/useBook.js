const controller = require('../sqlController/useBook');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/title/:value', controller.getByTitle);
router.get('/body/:value', controller.getByBody);
// router.get('/UserRt/:value', controller.getByGetRating);
router.get('/:id', controller.getById);

router.post('/', controller.createUseBook);
router.delete('/', controller.deleting);
router.put('/', controller.update);

module.exports = router;

