const request = require('request')

const forecast = (address,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=693cd55c6f6769acc9c1728688ac0ae4&query=' + encodeURIComponent(address)  + '&units=s'


    request({url: url , json: true },(error,response) =>{
        if(error){
            callback('unable to connect to weather api',undefined);
        }else if(response.body.error){
            callback('unable to find the location',undefined);
        }
        else{
            callback(undefined,{
                place: response.body.location.name,
                temperature: response.body.current.temperature,
                type: response.body.current.weather_descriptions[0]
            })
        }
    })

}


module.exports = forecast