const weather = require('../pkg/weather');

const getWeather = async (req, res) => {
    try {
        let data = await weather.forCity(req.params.city);
        res.status(200).send(data);
    } catch(err) {
        res.status(500).send('Internal Server Error');
        console.log(err);
    }
};

const getWeatherByStateCity = async (req, res) => {
    try {
        let data = await weather.forCityState(req.params.city, req.params.state);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send('Internal Server Error');
        console.log(err);
    }
};

module.exports = {
    getWeather, 
    getWeatherByStateCity
};