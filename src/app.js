const express = require('express');
const app = express();
const sampleApi = require('./apis/sample-apis');

app.use(express.json());
app.use(sampleApi);


app.get('/', (req, res) => {
  res.send('Hello from Automated Node.js running in Docker & WSL!');
});

module.exports = app;