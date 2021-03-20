const request = require('request')
const geocode = require('./utils/geocode')

geocode('vaishno-devi' , (error,data) => {
    console.log('error -->',error);
    console.log('data -->',data);
})