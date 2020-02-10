const { getGeoData } = require('./helpers/geoData')
const { getWeather } = require('./helpers/weatherData')

const location = "Bankok"

getGeoData(location, (err, geoData) => {
    if (err) return console.log(err.message)

    const { latitude, longitude, location } = geoData

    getWeather(latitude, longitude, (err, weatherData) => {
        if (err) return console.log(err.message)
        console.log(`\nLocation: ${location} \n ${weatherData}`)
    })
})