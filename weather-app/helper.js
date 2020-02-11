const request = require('request');


function getGeoData(location, callback) {

    const path = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?access_token=pk.eyJ1IjoiYW50b25nb3JkZWkiLCJhIjoiY2s2YzZ0ZWEyMGlveTNsb3Z1dXo5b2p4cSJ9.fNGWN1coXCXByHAsxcDMnw\n"

    request(path, (error, response, body) => {

            if (error) {
                return (error, callback)
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
    if(coordinates) {
        const path = 'https://api.darksky.net/forecast/3ae54a1a23c82978490626b8cbb4e3cf/' + coordinates.long + ',' + coordinates.lat + '\n'
        request(path, (error, response, body) => {

                if (error) {
                    return ('Incorrect location', null)
                }

                try {

                    const data = JSON.parse(body)

                    const weatherData = {
                        location: coordinates.location,
                        summary: data.daily.data[0].summary,
                        temperature: data.currently.temperature,
                        precipProbability: data.daily.data[0].precipProbability
                    }
                    return callback(null, weatherData)

                } catch (e) {

                    return (e, null)
                }

            }
        )
    }
    else return ('Incorrect', null)

}

module.exports = {getWeather, getGeoData}

console.log()