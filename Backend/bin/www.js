const constM = require('../appHolContr');
const http = require('http');
const port = process.env.PORT || '8900';
constM.set('port' , port);

const server = http.createServer(app);
server.listen(port);
