
const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address)
    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json:true
    }, (error, response, body) => {
      //console.log(JSON.stringify(body, undefined, 2));
      //
      if(error){
        reject('Unable to connect to Google servers.');
      }else if(body.status ==='ZERO_RESULTS') {
        reject('Unable to find that address.')
      }else if (body.status ==='OK'){
        var object = {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        }
        resolve(object);
      }
    });
  });
};

geocodeAddress('06460-020').then((location) => {
  console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
  console.log("Erroe", errorMessage);
})
