const fs = require('fs');
const http = require('http');
const path = require('path');

const PORT = 3000;
const DATA_FILE = 'requestCount.txt';

let requestCounter = 0;

// Read the current request count from the data file
fs.readFile(DATA_FILE, 'utf8', (err, data) => {
  if (!err) {
    requestCounter = parseInt(data, 10) || 0;
  }

  // Create an HTTP server
  const server = http.createServer((req, res) => {
    // Increment the request counter on each request
    requestCounter++;

    // Write the updated request count to the data file
    fs.writeFile(DATA_FILE, requestCounter.toString(), (err) => {
      if (err) {
        console.error('Error writing to data file:', err);
      }
    });

    // Send the response to the client
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Request counter value is ${requestCounter}`);
  });

  // Start the server
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
});
