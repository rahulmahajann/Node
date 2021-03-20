const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')

geocode('mumbai',(error,data) => {
    console.log('error -->',error);  
    console.log('data -->',data);  

    forecast(data.place,(error,data) => {
        console.log('error -->',error);  
        console.log('data -->',data);  
    })

})

