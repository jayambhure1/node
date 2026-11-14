const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello from Automated Node.js running in Docker & WSL!');
});

// GET request handler
app.get('/get-requests', (req, res) => {
  res.status(200).json({ status: 'success', timestamp: new Date() });
});

// POST request handler
app.post('/post-requests', (req, res) => {
  const requestData = req.body;

  if (!requestData || Object.keys(requestData).length === 0) {
    return res.status(400).json({ status: 'error', message: 'Request body is required' });
  }

  res.status(200).json({ status: 'success', data: requestData, timestamp: new Date() });
});



module.exports = app;