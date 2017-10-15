const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const wether = require('./weather/weather')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias:'address',
      describe:'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

  /*geocode.geocodeAddress(argv.address, (error, results) => {
    if(error) {
      console.log(error);
    } else {
      //console.log(JSON.stringify(results, undefined, 2));
      console.log(results.address);
      wether.getWether(results.latitude, results.longitude, (error, wetherResults) => {
        if(error) {
          console.log(error);
        } else {
          console.log(JSON.stringify(wetherResults, undefined, 2));
        }
      });
    }
  });*/
  console.log(argv.address);
  geocode.geocodeAddress(argv.address)
  .then(wether.getWether)
  .then(console.log)
  .catch((e) => {
    console.log(e)
  });







  //c589c3c39d47e6a35d130631e0932429
  //
