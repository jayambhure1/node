const express = require('express');
const app = express();

app.use(express.json());

// Health check endpoint for K8s / Docker probes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.get('/', (req, res) => {
  res.send('Hello from Automated Node.js running in Docker & WSL!');
});

module.exports = app;