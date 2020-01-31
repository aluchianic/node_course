## Consume API, async

- [Weather API](https://darksky.net/dev)
- [MapBox API](https://account.mapbox.com/auth/signup/) 
- [Node Library for requests](https://github.com/request/request)

        - register in weather API service
        - register in MapBox API service
        - get you account tokens from services
        - create project 
        - add `request` package to project
        - try API 

[Weather DOCS](https://darksky.net/dev/docs)
[MapBox DOCS](https://docs.mapbox.com/api/search/#geocoding)

    Create 2 helper functions:
        - getWeather (longitude, latitude): Promise(Weather)
        - getGeoData (address): Promise<longitude, latitude>
    
- get location from passed argument to node 
- get long and latt by location address using this endpoint:
`https://docs.mapbox.com/api/search/#forward-geocoding`
- pass long and latt to get weather from `https://api.darksky.net/forecast
/` service then return information 
```js
    const result =  { 
        location: 'string', 
        weather: { 
            summary: 'string', 
            currentTemperature: 'number',
            curentRainProb: 'number'
        }  
    }
```


