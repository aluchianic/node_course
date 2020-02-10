const request = require('request')

const getGeoData = (location, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiZmxlbm9yeSIsImEiOiJjazY5M3g5dXIwYjB5M21sYXhjMmR0NTVsIn0.ycJkCu1iJ1wwxzKfLo3HOw`

    request(url, (error, response) => {
        if (error) {
            callback(error, null)
        }
        
        if (response === undefined) {
            callback(error, null)
        }

        const jsonData = JSON.parse(response.body)

        if (jsonData.features.length === 0) {
            callback(error, null)
        } 

        const result = {
            placeName: jsonData.features[0].place_name,
            latiTude: jsonData.features[0].center[0],
            longiTude: jsonData.features[0].center[1]
        }

        callback(null, result)
    })
}

module.exports = {
    getGeoData
}