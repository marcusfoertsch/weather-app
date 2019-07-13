const request = require('request');

const locationApiURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFyY3VzZm9lcnRzY2giLCJhIjoiY2p5MXpqZ2oxMGpjaDNibzVsaTk5Y2NydCJ9.YHInTXCJvFt-Q46vMrowYQ'
const weatherApiURL = 'https://api.darksky.net/forecast/2e46e9d140211b75ca47a160ab77d8b9/37.8267,-122.4233';



request({url: locationApiURL, json: true}, (error, response) => {
    const losAngelesLocation = response.body.features[0];
    const losAngelesCoordinates = losAngelesLocation.center;

   console.log(losAngelesCoordinates);
});

request({url: weatherApiURL, json: true }, (error, response) => {
   const todayForecast = response.body.daily.data[0];
   const currentForecast =  response.body.currently;

   console.log(todayForecast.summary + ' ' + getForecastString((currentForecast)));
});


const getForecastString = (forecast) => {
    const temperatureString = 'It is currently ' + forecast.temperature + ' degrees out.';
    const precipString = 'There is a ' + forecast.precipProbability + '% chance of rain.';

    return temperatureString + ' ' + precipString;
}