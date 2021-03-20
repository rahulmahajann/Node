// WEATHER STACK API

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=693cd55c6f6769acc9c1728688ac0ae4&query=delhi&units=s'

request({ url: url ,json: true  },(error,response) =>{

    // this is used when we are not using json:true as an object

    // const data = JSON.parse(response.body)
    // console.log(data.current.temperature);
    

    // handling the error

    if(error){
        console.log('unable to connect to weather api');
    }else if(response.body.error){
        console.log('unable to find the location');
    }
    else{

    console.log(response.body.current.temperature);
    console.log(response.body.current.weather_code);
    console.log(response.body.current.weather_icons[0]);

    console.log('its currently ' + response.body.current.temperature + ' degrees out. it feels like ' 
    + response.body.current.precip + '% precipitation here!');

    console.log('current weather condition is: ' + response.body.current.weather_descriptions[0]);

        
    }

})
