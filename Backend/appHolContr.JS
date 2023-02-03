const express = require('express');
const logger = require('morgan');
const bookPlanRoute = require('./routes/bookPlan');
const eventDaterRoute = require('./routes/eventDater');
const cors = require('cors');
const eventDater = require('./models/eventDater');
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
        title: 'BookSar',
        version: '1.0.0',
        description: 'A bookinplan Api for planning holidays'
    },
    host: 'localhost:8900',
    basePath: '/'
};
cost options = {
    swaggerDefinition,
    apis: ['./routes/*.js']
};
const swaggerSpec = swaggerJsdoc(options);
const app = express(); 
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.use('/docs', swaggerUi.serve,swaggerUi.setup(swaggerSpec));
app.use("/bookPlan", bookPlanRoute);
app.use("/eventDater", eventDaterRoute);
app.use((req, res )=>
res.status(404).send("Sorry but the server your trying reach does not function correcly..."));

module.exports = app;
