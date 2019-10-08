const http = require('http');

const fetchConfigApi = async function fetchConfigurationApi() {
  const fetchApi = function fetchRemoteApi(url) {
    return new Promise((resolve, reject) => { // wrap the api fetching in a Promise based interface
      http.get(url, res => {
        let data = Object.create(null); // create a clean object with no derived properties from prototypes
          res.on('data', d => {
            let parsed = JSON.parse(d); // parse the JSON data to an object we can use
            data = {...parsed}; // spread the properties in the 'data' object we just created
            resolve(data);
          });
          res.on('error', error => {
            reject(error)
          })
      })
    });
  };
  const cashIn = fetchApi("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in"); // urls to the configurations
  const cashOut_natural = fetchApi("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural");
  const cashOut_legal = fetchApi("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical");
  
  const loaded = await Promise.all([cashIn, cashOut_natural, cashOut_legal]); // waiting for all to resolve instead of one at a time
  return { // build the configuration object
    EUR: {
      smallestUnit: 0.01, // how much of the biggest unit is contained in the smallest unit
      biggestUnit: 100, // e.g. how much of the smallest unit is contained in the biggest unit
      },
      logic: {
        cashIn: {...loaded[0]},
        cashOut: {
          natural: {...loaded[1]},
          legal: {...loaded[2]},
        },
      },
  }

}

module.exports = fetchConfigApi;