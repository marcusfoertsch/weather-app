const request = require('request');
const geocode = require('./utils/geocode');

const weatherApiURL = 'https://api.darksky.net/forecast/2e46e9d140211b75ca47a160ab77d8b9/37.8267,-122.4233';

//
// request({url: weatherApiURL, json: true }, (error, response) => {
//    if (error) {
//        console.log('Unable to connect to weather service!');
//    } else if (response.body.error) {
//        console.log('Unable to find location');
//    } else {
//        const todayForecast = response.body.daily.data[0];
//        const currentForecast =  response.body.currently;
//
//        console.log(todayForecast.summary + ' ' + getForecastString((currentForecast)));
//    }
//
// });
//
//
// const getForecastString = (forecast) => {
//     const temperatureString = 'It is currently ' + forecast.temperature + ' degrees out.';
//     const precipString = 'There is a ' + forecast.precipProbability + '% chance of rain.';
//
//     return temperatureString + ' ' + precipString;
// };

geocode('Lamar, Indiana', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});