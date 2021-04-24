const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFodWxtYWhhamFubiIsImEiOiJja21pNG55cXMwZG92Mm5xdndwcHNvdXlsIn0.ESrPYLF0G3EDv8Y2d_NIZw'


    request({url: url , json: true}, (error,response) =>{
        if(error){
            callback('unable to connect to mapbox api!',undefined)
        }else if(response.body.features.length == 0){
            callback('unable to find your desired location. try another location',undefined)
        }else if(response.body.message){
            callback('the link got broke down please re-verify the link',undefined)
        }else{
            callback(undefined,{
                place: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            })
        }
    })

}




module.exports = geocode