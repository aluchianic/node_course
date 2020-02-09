const geodata = require('./helpers/geodata')
const weather = require('./helpers/getWeather')

geodata.getGeoData("Belarus", (err, data) => {
     if(err){
         return console.log(err.massage)
     }
     weather.getWeather(data.lat,data.long,(err, data1) => {
         if(err){return console.log(err.massage)}
     console.log(data.location,"—",data1)
 })
})

