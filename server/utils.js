const url = require('url');
const config = require('./config');

const five_day_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=';
const full_five_URL = five_day_URL + '4c747836ffcebf6567e029f7a61a0ef0';

module.exports = {
  generateWebAppURL: function(locationConfigType, locationConfigData) {
    const baseUrlConfig = config.baseUrl;
    const APIkey = config.APIkey;
    const queryConfig = config.query;

    let requestQuery = { appid: APIkey };

    if (locationConfigType !== 'coordinates') {
      requestQuery[queryConfig[locationConfigType]] = locationConfigData;
    } else {
      if (locationConfigData.latitude) {
        requestQuery[queryConfig.coordinates.latitude] = locationConfigData.latitude;
      }

      if (locationConfigData.longitude) {
        requestQuery[queryConfig.coordinates.longitude] = locationConfigData.longitude;
      }
    }

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: requestQuery,
    });
  },
  // GET 5 DAY FORECAST
	getFiveDayTemp: function(location) {
		//web safe encoding
		var encodedLocation = encodeURIComponent(location);
		//interpolate string
		var requestUrl = `${full_five_URL}&q=${encodedLocation}`;
		console.log(requestUrl);

		//========================================
		// promise callback funcs
		function success(res) {
			if(res.status === 200) {
				return res.data;
			} else {
				throw new Error(res.data.message);
			}
		};

		function fail(err){
			throw new Error(err.response.data.message);
		}

		return axios.get(requestUrl).then(success, fail);
	}
};
