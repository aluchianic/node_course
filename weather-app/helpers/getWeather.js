const request = require('request')

const getWeather=(lat,long,callback)=>{

    const url =`https://api.darksky.net/forecast/e48d111db62f38b9ae1c9cad16f7b92b/${lat}${long}`

    request(url, (error, response) => {
        if (error) {
             callback(error, null)
        }

        if (!response) {
             return callback({error: true, massage: "no response "}, null)
        }

        console.log(response.body)
        const body=response.body
        const allInfo=JSON.parse(body)

        if (!allInfo.daily) {
            callback({error: true, massage: "daily is empty"}, null)
        }
        const weatherData={
                temperature : allInfo.currently.temperature,
                summary: allInfo.daily.summary,
                preProb : allInfo.daily.data[0].precipProbability
            }
        const result=weatherData.summary+ " The temperature today is "+weatherData.temperature+", precip probability is "+weatherData.preProb
        callback(null,result)
    })
}

module.exports={
    getWeather
}
