// Import http module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    
    // Set response header
    res.setHeader('Content-Type', 'text/plain');

    // Handle request
    res.write('Hello! This is my Node.js server.');

    // End response
    res.end();
});

// Run server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});