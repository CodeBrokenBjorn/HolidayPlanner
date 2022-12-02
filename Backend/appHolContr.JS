const express = require('express');
const logger = require('morgan');
const userRoute = require('./routes/user'); 

const app = express(); 
app.use(express.json());
app.use(logger('dev'));

app.use("/users", userRoute);

app.use((req, res )=>
res.status(404).send("Sorry but the server your trying reach does not function correcly..."));

module.exports = app;
