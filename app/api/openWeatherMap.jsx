var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=027bb4d9b3e5d00ee07956d42c54139c&units=metric';

// 027bb4d9b3e5d00ee07956d42c54139c

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;
        
        return axios.get(requestUrl).then(function(response){
            if (response.data.cod && response.data.message){
                throw new Error(response.data.message);                
            } else{
                return response.data.main.temp;
            }
        }, function(response){
            throw new Error(response.data.message);
        });
    }
}