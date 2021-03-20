const request = require('request')

const forecast = require('./utils/forecast')


forecast('pune',(error,data) => {
    console.log('error -->',error);
    console.log('information -->',data);
})