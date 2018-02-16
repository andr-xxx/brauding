require('./tools/dotenv');
require('./db');
// require('./tools/logger');
const Server = require('./servers');

const server = new Server(process.env.SERVER_PORT);

server.runServer();
server.initRoutes();

