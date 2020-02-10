const request = require('request');


function getGeoData(location, callback) {

    const path = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?access_token=pk.eyJ1IjoiYW50b25nb3JkZWkiLCJhIjoiY2s2YzZ0ZWEyMGlveTNsb3Z1dXo5b2p4cSJ9.fNGWN1coXCXByHAsxcDMnw\n"

    request(path, (error, response, body) => {

            if (error) {
                console.log('No internet connection!')
                return error
            }

            try {

                const data = JSON.parse(body)

                if (data.features.length) {
                    const coordinates = {
                        long: data.features[0].center[1],
                        lat: data.features[0].center[0],
                        location: data.features[0].place_name
                    }

                    return callback(null, coordinates)
                }
                return callback('Incorrect location', null)
            } catch (e) {
                return callback('Incorrect location', null)

            }

        }
    )
}

function getWeather(coordinates, callback) {

    const path = 'https://api.darksky.net/forecast/3ae54a1a23c82978490626b8cbb4e3cf/' + coordinates.long + ',' + coordinates.lat + '\n'
    request(path, (error, response, body) => {

            if (error) {
                console.log('No internet connection!')
                return error
            }

            try {

                const data = JSON.parse(body)


                //console.dir(data, {depth: 5})
                const weatherData = {
                    summary: data.daily.data[0].summary,
                    temperature: data.currently.temperature,
                    precipProbability: data.daily.data[0].precipProbability
                }
                return callback(null, coordinates.location + "\n" +
                    "Temperature is " + ((weatherData.temperature - 32) * 5 / 9) + " °C\n" +
                    "Precip probability is " + (weatherData.precipProbability * 100) + " %\n" +
                    weatherData.summary)

            } catch (e) {
                console.log('Incorrect location')
                return e;
            }

        }
    )

}

module.exports = {getWeather, getGeoData}