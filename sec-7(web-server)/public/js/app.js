const weather_form = document.querySelector('form')
const search = document.querySelector('input')
const f_msg = document.querySelector('#f_para')
const s_msg = document.querySelector('#s_para')

// f_msg.textContent='rahul'

weather_form.addEventListener('submit',(e) => {
    e.preventDefault()
    const location = search.value
    
    f_msg.textContent='loading....'
    s_msg.textContent=''

    fetch('/weather?search=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            f_msg.textContent=data.error
        }else{
            f_msg.textContent=data.area
            s_msg.textContent='its currently ' + data.forecast.weather_type + ' in ' + data.area
            console.log(data.location)
            console.log('its currently ' + data.forecast.weather_type + ' in ' + data.area + '. While, Temperature in ' + data.area + ' is ' + data.forecast.temperature + 'degC .');
        }
    })
    })

})
