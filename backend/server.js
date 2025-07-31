// backend/server.js
//
// Entry point for the Node.js server.  It imports the Express app
// from `app.js` and starts listening on the configured port.

const app = require('./app');

// Use environment variable PORT if available, otherwise default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
