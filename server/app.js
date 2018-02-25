require('./tools/dotenv');
const db = require('./db');

const Server = require('./servers');
const server = new Server(process.env.SERVER_PORT);

server.runServer();
db.connect();