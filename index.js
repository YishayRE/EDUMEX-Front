/*
const Server = require('./models/server');

const server = new Server();

server.listen();
*/

const express = require('express')
const app = express()

app.get('/api', function (req, res) {
  res.send('Hello World')
});

app.use(express.static("public"));
app.use("/static", express.static("public"));

app.listen(3000);