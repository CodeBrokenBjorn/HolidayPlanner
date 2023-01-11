const controller = require('../sqlController/eventDater');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/Destination/:value', controller.getByDestination);
router.get('/StartDate/:date', controller.getByStartDate);
router.get('/EndDate/:date', controller.getByEndDate);
router.get('/Amount/:value', controller.getByAmount);
<<<<<<< HEAD
// router.get('/description/:value', controller.getByDescription);
router.get('/:id', controller.getById);

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleting);
=======


router.post('/', controller.create);
router.put('/:eventDater_id', controller.update);
router.delete('/:eventDater_id', controller.deleting);
>>>>>>> 7a37a1b5ae797eabcdfa7805662f960a1537d07e

module.exports = router;