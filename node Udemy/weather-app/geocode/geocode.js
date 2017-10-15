// const axios = require('axios');
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
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

// var geocodeAddress = (address) => {
//   var encodedAddress = encodeURIComponent(address);
//   var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
//   return axios.get(geocodeUrl).then((response) => {
//     var obj = {
//       address: response.results[0].formatted_address,
//       latitude: response.results[0].geometry.location.lat,
//       longitude: response.results[0].geometry.location.lng
//     }
//     console.log("fdgdg", obj);
//     return obj;
//   }).catch((e) => {
//     e;
//   })
// }

module.exports.geocodeAddress = geocodeAddress;
