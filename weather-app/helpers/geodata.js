const request = require('request')

function getGeoData(location, callback) {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?access_token=pk.eyJ1Ijoicm9tYW55YTg2NiIsImEiOiJjazY5NGNhM28wM3MxM2xtZ3FneHBtdzhnIn0.MjyHOfUpU36HP1AjfDjJSQ\n"

    request(url, (error, response) => {
        if (error) {

        }
        if (!response) {
            callback({error: true, massage: "no response "}, null)
        }

        const body1 = JSON.parse(response.body)

        if (body1.features.length !== 0) {
            const coordinates = {
                long: body1.features[0].center[1],
                lat: body1.features[0].center[0],
                location: body1.features[0].place_name
            }
            callback(null, coordinates)
        } else {
            callback({error: true, massage: "features is empty"}, null)
        }
    })
}

module.exports = {
    getGeoData: getGeoData
}
