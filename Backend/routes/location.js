const controller = require('../sqlController/location');
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll);
router.get('/title/:value', controller.getByTitle);
router.get('/body/:value', controller.getByBody);
router.get('/HolLocation/:value', controller.getByHolLocation);
router.get('/:id', controller.getById);

router.post('/', controller.Locationcreate);
router.post('/', controller.Locationdeleting);
router.post('/', controller.Locationupdate);

module.exports = router;
