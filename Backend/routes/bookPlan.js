const controller = require('../sqlController/bookPlan');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/title/:value', controller.getByTitle);
router.get('/body/:value', controller.getByBody);
// router.get('/description/:value', controller.getByDescription);
router.get('/:id', controller.getById);

router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/', controller.deleting);

module.exports = router;
