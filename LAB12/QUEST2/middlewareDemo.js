const express = require('express');
const app = express();

// Global Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});

// Second Middleware
app.use((req, res, next) => {
    console.log("Second middleware executed");
    next();
});

// Route-level middleware
const checkAuth = (req, res, next) => {
    console.log("Auth middleware");
    next();
};

// Route with middleware
app.get('/secure', checkAuth, (req, res) => {
    res.send("Secure Route Accessed");
});

// Normal route
app.get('/', (req, res) => {
    res.send("Home Page");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});