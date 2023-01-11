const controller = require('../sqlController/bookPlan');
var express = require('express');
var router = express.Router();
const upload = require('../middleware/upload');

router.get('/', controller.getAll);
router.get('/title/:value', controller.getByTitle);
router.get('/body/:value', controller.getByBody);
router.get('/:id', controller.getById);
router.post('/', upload.single("image"), controller.create);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleting);

module.exports = router;
