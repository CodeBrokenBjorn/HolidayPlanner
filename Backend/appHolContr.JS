const express = require('express');
const logger = require('morgan');
const bookPlanRoute = require('./routes/bookPlan');
const eventDaterRoute = require('./routes/eventDater');
const cors = require('cors');
const eventDater = require('./models/eventDater');

const app = express(); 
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.use("/bookPlan", bookPlanRoute);
app.use("/eventDater", eventDaterRoute);
app.use((req, res )=>
res.status(404).send("Sorry but the server your trying reach does not function correcly..."));

module.exports = app;
