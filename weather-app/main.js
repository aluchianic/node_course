const {getWeather,getGeoData}=require('./helper')

const LOCATION = 'Grodno'

getGeoData(LOCATION,(err, coordinates)=>{getWeather(coordinates, (e, data)=>console.log(data))})

//записать переменные
