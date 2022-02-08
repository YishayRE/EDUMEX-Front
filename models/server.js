const express = require('express');
const cors = require('cors');
const {createServer} = require('http');

class Server {
    constructor() {
        this.app  = express();
        this.port = 8081;
        this.server = createServer(this.app);
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

module.exports = Server;