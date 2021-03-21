// MAPBOX API

const request = require('request')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ladakh.json?access_token=pk.eyJ1IjoicmFodWxtYWhhamFubiIsImEiOiJja21pNG55cXMwZG92Mm5xdndwcHNvdXlsIn0.ESrPYLF0G3EDv8Y2d_NIZw'

request({url : url , json: true} , (error,response) => {

    // lon --> 0
    // lat --> 1


    // error handling

    if(error){
        console.log('unable to connect to mapbox api');
    }else if(response.body.message){
        console.log('the link get broke down please re-verify the link!');
    }else if(response.body.features.length ==0){
        console.log('unable to find your desired location. try another location');
    }
    else{
    console.log('latitutde of delhi --> ' + response.body.features[0].center[1]);
    console.log('longitude of delhi --> ' + response.body.features[0].center[0]);
    }
}) 