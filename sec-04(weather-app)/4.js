const request = require('request')

const forecast = require('./utils/forecast')


forecast(28.667,77.217,(error,data) => {
    console.log('error -->',error);
    console.log('information -->',data);
})