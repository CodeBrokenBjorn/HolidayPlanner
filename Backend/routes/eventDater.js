const controller = require('../sqlController/eventDater');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/Destination/:value', controller.getByDestination);
router.get('/StartDate/:date', controller.getByStartDate);
router.get('/EndDate/:date', controller.getByEndDate);
router.get('/Amount/:value', controller.getByAmount);
// router.get('/description/:value', controller.getByDescription);
router.get('/:id', controller.getById);

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleting);

module.exports = router;