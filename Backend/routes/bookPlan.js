const controller = require('../sqlController/bookPlan');
var express = require('express');
var router = express.Router();
const upload = require('../middleware/upload');
/**
 * @swagger
 * tags:
 *  name: Book Plan
 *  description: Book Plan planning destination
 */
router.get('/', controller.getAll);
/**
 * @swagger
 * get:
 *  tags:
 *  name: Book Plan
 *  description:
 *  response:
 *      200:
 *          description:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      properties:
 *                          id:
 *                              type: integer
 *                              description: ID of the Book Plan
 *                          title:
 *                              type: string
 *                              description: Title of the book plan
 *                          body:
 *                              type: string
 *                              description: Body of the book plan
 *                          images:
 *                              type: file
 *                              description: Images of the book plan
 *                          
 */
router.get('/title/:value', controller.getByTitle);
/**
 * @swagger
 * get:
 *  tags: Book plan
 *  description: Retrieve events by Book Plan title
 *  parameters:
 *  - in: path
 *    name: Title
 *    required: true
 *    type: string
 *    format: date
 *  response:
 *    200:
 *      description: Succesfully retrieving all the content
 *    404:
 *      description: No dates exist found
 */
router.get('/body/:value', controller.getByBody);
/**
 * @swagger
 * get:
 *  tags: Book plan
 *  description: Retrieve events by Book Plan body
 *  parameters:
 *  - in: path
 *    name: Body
 *    required: true
 *    type: string
 *    format: date
 *  response:
 *    200:
 *      description: Succesfully retrieving all the content
 *    404:
 *      description: No dates exist found
 */
router.get('/:id', controller.getById);
/**
 * @swagger
 * /{id}
 * get:
 *  summary: Gets a Book Plan by it's ID
 *  description: Returning all Dates by a provided ID
 *  tags: [Book Plan]
 *  produces:
 *      - application/json
 *  parameters:
 *      -in: path
 *       name: id
 *       schema:
 *          type: integer
 *       required: true
 *       description: ID of the choosen catergorties
 *       type: integer
 *  responses:
 *      200:
 *          description: Successful response
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: ID of the event Date
 *             title:
 *                  type: string
 *                  description: Title of the book plan
 *             body:
 *                  type: string
 *                  description: Body of the book plan
 *             images:
 *                  type: file
 *                  description: Images of the book plan

 *      404:
 *          description: Book Plan was not found
 *          
 *  
 *  
 */
router.post('/', upload.single("image"), controller.create);
/**
 * @swagger
 *  post:
 *      description: Creates a images
 *      tags: 
 *      produces:
 *          -application/json
 *      parameters:
 *          -
 */
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:id', controller.deleting);

module.exports = router;
