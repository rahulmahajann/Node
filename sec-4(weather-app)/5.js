// callback chaining!

const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')

const location = process.argv[2]
// 2nd argument of argv is the content that we have 
// written after node __filename__ .

geocode(location,(error,loc_data) => {


    if(error){
        return console.log(error);
    }

    forecast(loc_data.latitude,loc_data.longitude,(error,data) => {

        if(error){
            return console.log(error);
        }
        console.log(loc_data.place);
        console.log('weather details -->',data);  
    })

})

