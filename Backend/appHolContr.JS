const expres = require('express');
const logger = require('morgan');
const appRoute = require('./routes/route');

const app = express();
app.use(expres.json());
app.use(logger('dev'));

app.use("/user" , appRoute);

app.use((req, res) =>
res.status(404).send("Sorry but the page your trying to find doesn't exist"));
module.exports = app;