// imports/requires
const express = require('express');
const weather = require('./handlers/weather');
const config = require('./pkg/config');

// declarations
const api = express();

// middlewares
api.use(express.json());

// routes
api.get('/weather/:city', weather.getWeather);
api.get('/weather/state/:state/city/:city', weather.getWeatherByStateCity);

// start
api.listen(config.get('service').port, err => {
    if(err) {
        return console.log(err);
    }
    console.log(`Service successfully started on port ${config.get('service').port}`);
});