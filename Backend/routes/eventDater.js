const controller = require('../sqlController/eventDater');
var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Event Dater
 *  description: Event Dater choosing a date with specific destination
 * 
 */

router.get('/', controller.getAll);
/**
 * @swagger
 * get:
 *  tags:
 *  name: Evemt Dater
 *  description: Retrieve all Event Dater
 *  response:
 *      200:
 *      description: Successful retrieve response
 *      content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  properties:
 *                      id:
 *                          type: integer
 *                          description: ID of the Event Dates
 *                      destination:
 *                          type: string
 *                          description: Destination of the event Date
 *                      start_date:
 *                          type: string
 *                          format: date-time
 *                          description: Start date pf tje evemt
 *                      end_date:
 *                          type: string
 *                          format: date-time
 *                          description: End Date of the event
 *                      amount:
 *                          type: number
 *                          description: Amount of the event date                 
 */
router.get('/:id', controller.getById);
/**
 * @swagger
 * /{id}
 * get:
 *  summary: Gets a Event Dates by it's ID
 *  description: Returning all Dates by a provided ID
 *  tags: [Event Dater]
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
 *              destination:
 *                  type: string
 *                  description: Destination of the event date
 *              start_date:
 *                  type: string
 *                  format: date-time
 *                  description: start date of the event date
 *              end_date:
 *                  type: string
 *                  format: date-time
 *                  description: End date of the Event Dates
 *              amount:
 *                  type: number
 *                  description: Amount for the event date
 *      404:
 *          description: Event date was not found
 *          
 *  
 *  
 */
router.get('/Destination/:value', controller.getByDestination);

/**
 * @swagger
 * get:
 *  tags: Event Date
 *  description: Retrieve events by end date
 *  parameters:
 *  - in: path
 *    name: date
 *    required: true
 *    type: string
 *    format: date
 *  response:
 *    200:
 *      description: Succesfully retrieving all the content
 *    404:
 *      description: No dates exist found
 */
router.get('/StartDate/:date', controller.getByStartDate);
/**
 * @swagger
 * get:
 *  tags: Event Date
 *  description: Retrieve events by end date
 *  parameters:
 *  - in: path
 *    name: date
 *    required: true
 *    type: string
 *    format: date
 *  response:
 *    200:
 *      description: Succesfully retrieving all the content
 *    404:
 *      description: No dates exist found
 */
router.get('/EndDate/:date', controller.getByEndDate);

/**
 * @swagger
 * get:
 *  tags: Event Date
 *  description: Retrieve events by end date
 *  parameters:
 *  - in: path
 *    name: date
 *    required: true
 *    type: string
 *    format: date
 *  response:
 *    200:
 *      description: Succesfully retrieving all the content
 *    404:
 *      description: No dates exist found
 */
router.get('/Amount/:value', controller.getByAmount);
/**
 * @swagger
 * get:
 *  tags: Event Date
 *  description: Retrieve events by end date
 *  parameters:
 *  - in: path
 *    name: date
 *    required: true
 *    type: string
 *    format: date
 *  response:
 *    200:
 *      description: Succesfully retrieving all the content
 *    404:
 *      description: No dates exist found
 */
router.post('/', controller.create);
/**
 * @swagger
 * paths:
 *  post:
 *      tags:[Event Dater]
 *      description: Creates a new data for Event Dater
 *      requestBody:
 *          required: true
 *          content:
 *              -application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          destination:
 *                              type: string
 *                              example: TestParis
 *                          startDate:
 *                              type: string
 *                              format: date
 *                              example: 2022=02-22
 *                          endDate:
 *                              type: string
 *                              format: date
 *                              examples: 2022-02-25
 *                          amount:
 *                              type: integer
 *                              example: 3200
 *            responses:
 *              201:
 *                  description: Event Date was created 
 *              400:
 *                  description: Event Date was not able to be created due to invalid data
 * 
 */
router.put('/', controller.update);
/**
 * @swagger
 * paths:
 *  put:
 *      tags:[Event Dater]
 *      description: Update a new data for Event Dater
 *      requestBody:
 *          required: true
 *          content:
 *              -application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                              example: 1
 *                          destination:
 *                              type: string
 *                              example: TestLithuania
 *                          startDate:
 *                              type: string
 *                              format: date
 *                              example: 2021-01-12
 *                          endDate:
 *                              type: string
 *                              format: date
 *                              examples: 2021-03-15
 *                          amount:
 *                              type: integer
 *                              example: 2500
 *            responses:
 *              201:
 *                  description: Event Date was Updated 
 *              400:
 *                  description: Event Date was not able to be Updated due to invalid data
 * 
 */
router.delete('/:id', controller.deleting);
/**
 * @swagger
 * paths:
 * /{id}:
 *  delete:
 *      tags:[Event Dater]
 *      description: Deleting an a event based on the date was provided
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Id that was choosen was deleted.
 *      response:
 *          200:
 *              description: Event Date was deleted successfully
 *          400:
 *              description: Invalid as date 
 *          
 */
module.exports = router;