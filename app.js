// Requires
var express = require('express');
var mongoose = require('mongoose');

// Init variables
var app = express();

// Connect to database
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('\x1b[32m%s\x1b[0m', 'Database is running in port 27017');
    }
});

// Routes
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        message: 'Petición realizada correctamente.'
    });
});

// Listen 
app.listen(3000, () => {
    console.log('\x1b[32m%s\x1b[0m', 'Server is running in port 3000');
});