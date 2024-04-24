const express = require('express');
const history = require('express-history-api-fallback');
const app = express();

// Serve static files
app.use(express.static('public'));

// Handle client-side routing
app.use(history('index.html', { verbose: true }));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
