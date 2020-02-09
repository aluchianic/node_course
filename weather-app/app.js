const { getGeoData } = require('./helpers/geoData')
const { getWeather } = require('./helpers/weatherData')

const location = "belarus"

getGeoData(location, (err, data) => {
    if (err) return console.log(err.message)
    getWeather(data.latitude, data.longitude, (err, data1) => {
        if (err) return console.log(err.message)
        console.log(`\nLocation: ${data.location} \n ${data1}`)
    })
})