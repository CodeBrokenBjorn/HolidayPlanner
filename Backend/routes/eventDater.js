const controller = require('../sqlController/eventDater');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/Destination/:value', controller.getByDestination);
router.get('/body/:date', controller.getByDate);
router.get('/body/:date', controller.getByEndDate);
router.get('/body/:value', controller.getByAmount);
// router.get('/description/:value', controller.getByDescription);
router.get('/:id', controller.getById);

router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/', controller.deleting);

module.exports = router;