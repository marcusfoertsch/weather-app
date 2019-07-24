const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const weatherApiURL = 'https://api.darksky.net/forecast/2e46e9d140211b75ca47a160ab77d8b9/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude);

    request({url: weatherApiURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            const todayForecast = response.body.daily.data[0];
            const currentForecast =  response.body.currently;
            const currentTemperature = 'It is currently ' + currentForecast.temperature + ' degrees out.';
            const precipitationProbability = 'There is a ' + currentForecast.precipProbability + '% chance of rain.';

            callback(undefined, todayForecast.summary + ' ' + currentTemperature + ' ' + precipitationProbability);
        }
    });
};

module.exports = forecast;