const fetch = require('node-fetch');
const config = require('../config');

const API_KEY = config.get('weather').api_key;
const API_PREFIX = `http://api.openweathermap.org/data/${config.get('weather').api_version}`;

const cityCache = {};

const forCity = async (city) => {
    let currentTimestamp = new Date().getTime();
    if (cityCache[city] && cityCache[city].timestamp > currentTimestamp) {
        return cityCache[city].data;
    }

    let result = await fetch(`${API_PREFIX}/weather?q=${city}&appid=${API_KEY}`);
    let data = await result.json();

    cityCache[city] = {
        data,
        timestamp: new Date().getTime() + 60 * 1000
    };

    return cityCache[city].data;
};

const forCityState = async (city, state) => {
    let result = await fetch(`${API_PREFIX}/weather?q=${city},${state}&appid=${API_KEY}`);
    return await result.json();
};

module.exports = {
    forCity,
    forCityState
};