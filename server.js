const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the project directory
app.use(express.static(__dirname));

// Handle root request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
