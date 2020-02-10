const request = require('request')

const getGeoWeather = (latiTude, longiTude, callback) => {
    const url = `https://api.darksky.net/forecast/4e01d7a1e991e293fa34f0566b62c80d/${longiTude},${latiTude}`

    request(url, (error, response) => {
        if (response === undefined) {
            callback(error, null)
        }

        const jsonData = JSON.parse(response.body)

        if (!jsonData.daily) {
            callback(error, null)
        }

        const weatherDaily = jsonData.daily.data

        if (weatherDaily.length === 0) {
            callback(error, null)
        }

        const result = {
            summary: jsonData.daily.data[0].summary,
            precipProbability: jsonData.daily.data[0].precipProbability
        }

        callback(null, result)
    })
}

module.exports = {
    getGeoWeather
}