const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const domain = 'http://api.weatherstack.com/current'
    // access key could (and should) be a parameter
    const access_key = '?access_key=' + '71e6621645db9f02170819c978d2f16b'
    // units could (and should be a parameter)
    const units = '&units=' + 'm'
    const url = domain + access_key + '&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + units

    // Make the request
    //request( {url: url, json: true}, (error, response) => { // The old way
    request( { url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
      } else if (body.error) {
            callback('Unable to find the latitude and longitude specified. Try again with a different term', undefined)
      } else {
            const desc = body.current.weather_descriptions[0]
            const curr = body.current.temperature
            const feel = body.current.feelslike
            callback( undefined, desc + '. It is currently ' + curr + ' degrees out. It feels like ' + feel + ' degrees out.')
      }
    } )
}

module.exports = forecast 