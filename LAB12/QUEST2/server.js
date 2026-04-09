const express = require('express');
const mongoose = require('./db');
const User = require('./model/User');

const app = express();
app.use(express.json());

// CREATE
app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

// READ
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// UPDATE
app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

// DELETE
app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});