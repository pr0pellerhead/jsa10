const fetch = require('node-fetch');

const API_KEY = '71489c6f1fd2ee8788566c3131f85e68';

const getWeather = async (req, res) => {
    try {
        let result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${API_KEY}`);
        let data = await result.json();
        res.status(200).send(data);
    } catch(err) {
        res.status(500).send('Internal Server Error');
        console.log(err);
    }
};

module.exports = {
    getWeather
};