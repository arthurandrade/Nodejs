const request = require('request');

var getWether = (coordenate) => {
  console.log(coordenate);
  return new Promise(function(resolve, reject) {
    request({
      url: `https://api.forecast.io/forecast/c589c3c39d47e6a35d130631e0932429/${coordenate.latitude},${coordenate.longitude}?units=si`,
      json: true
    }, (error, response, body) => {
      if(!error && response.statusCode === 200) {
        var object = {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        };
        //console.log(object);
        resolve(object);
      }else {
        reject('Unable to fetch weather.')
      }
    });
  });
};

module.exports.getWether = getWether;
