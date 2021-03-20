const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=693cd55c6f6769acc9c1728688ac0ae4&query=37.8267,-122.4233'

request({ url: url ,json: true  },(error,response) =>{
    // const data = JSON.parse(response.body)
    // console.log(data.current.temperature);
    console.log(response.body.current.temperature);
})