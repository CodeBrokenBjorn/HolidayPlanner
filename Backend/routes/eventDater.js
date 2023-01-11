const controller = require('../sqlController/eventDater');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/Destination/:value', controller.getByDestination);
router.get('/StartDate/:date', controller.getByStartDate);
router.get('/EndDate/:date', controller.getByEndDate);
router.get('/Amount/:value', controller.getByAmount);


router.post('/', controller.create);
router.put('/:eventDater_id', controller.update);
router.delete('/:eventDater_id', controller.deleting);

module.exports = router;