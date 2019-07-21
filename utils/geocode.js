const request = require('request');

const geocode = (address, callback) => {
    const apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFyY3VzZm9lcnRzY2giLCJhIjoiY2p5MXpqZ2oxMGpjaDNibzVsaTk5Y2NydCJ9.YHInTXCJvFt-Q46vMrowYQ';

    request({ url: apiUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    });
};

geocode('Lamar, Indiana', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

module.exports = geocode;