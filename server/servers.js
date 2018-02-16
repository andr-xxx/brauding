const express = require('express');

class Server {
  constructor(port) {
    this.port = port;
  }

  runServer() {
    this.app = express();

    this.app.listen(this.port, () => {
      console.log(`server was run on port ${this.port}`);
    })
  }

  initRoutes() {
    this.app.get('/', (req, res) => {
      res.json({
        status: 200,
        response: 'Hello Andr'
      })
    })
  }
}

module.exports = Server;