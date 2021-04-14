// imports/requires
const express = require('express');
const weather = require('./handlers/weather');

// declarations
const api = express();

// middlewares
api.use(express.json());

// routes
api.get('/weather/:city', weather.getWeather);

// start
api.listen(9000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service successfully started on port 9000');
});