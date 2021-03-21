const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')

geocode('ladakh',(error,data) => {


    if(error){
        return console.log(error);
    }

    forecast(data.place,(error,data) => {
        console.log('error -->',error);  
        console.log('data -->',data);  
    })

})

