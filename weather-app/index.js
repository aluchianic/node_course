const {getGeoData} = require('./helpers/geoData.js')
const {getGeoWeather} = require('./helpers/geoWeather.js')

const location = 'Grodno'

getGeoData(location, (error, {longiTude, latiTude, placeName}) => {
    if (error) {
        console.log('error')
    }

    getGeoWeather(longiTude, latiTude, (error, {summary, precipProbability}) => {
        if (error) {
            console.log('error')
        }

        console.log(placeName)
        console.log(`${summary}`)
        console.log(`Chance of precipitation: ${precipProbability}`)
    })
})