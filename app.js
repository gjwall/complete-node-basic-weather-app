const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Watch the "Call stack, Callback queue and event loop" video once the weather app is complete

const address = process.argv[2]

if(address) {
      // geoCode(location, (error, data) => {
      geoCode(address, (error, {latitude, longitude, location} = {}) => {
            if(error) {
                  return console.log('Error ' + error) 
            } else {       
                  forecast(latitude, longitude, (error, forecastData) => {
                        //console.log('Data', data.location)
                        console.log(location)
                        console.log(forecastData)
                  })
            }      
      })
} else {
      console.log('Please enter a value for location')
}

/*
https://api.mapbox.com/geocoding/v5/mapbox.places/12wht.json?access_token=pk.eyJ1IjoicjNkczQxZnQiLCJhIjoiY2tlNDh1cjJ1MHFudzJ5bGZpM3FlNTlicyJ9.-CakA1sc051xBnOCTfR2RA&limit=1

https://docs.mapbox.com/api/search/#endpoints

https://weatherstack.com/documentation

https://weatherstack.com/documentation

https://www.npmjs.com/package/request

https://learning.oreilly.com/home/
 */