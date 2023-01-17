const controller = require('../sqlController/eventDater');
var express = require('express');
var router = express.Router();
router.get('/', controller.getAll);
router.get('/id/:id', controller.getById);
router.get('/Destination/:value', controller.getByDestination);
router.get('/StartDate/:date', controller.getByStartDate);
router.get('/EndDate/:date', controller.getByEndDate);
router.get('/Amount/:value', controller.getByAmount);
router.post('/:id', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleting);

module.exports = router;