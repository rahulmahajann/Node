const request = require('request')

const forecast = (latitude,longitude,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=693cd55c6f6769acc9c1728688ac0ae4&query=' +  latitude + ',' +  longitude  + '&units=m'


    request({url: url , json: true },(error,response) =>{
        if(error){
            callback('unable to connect to weather api',undefined);
        }else if(response.body.error){
            callback('unable to find the location',undefined);
        }
        else{
            callback(undefined,{
                temperature: response.body.current.temperature,
                weather_type: response.body.current.weather_descriptions[0],
                precipitation_percent: response.body.current.precip 
            })
        }
    })

}


module.exports = forecast