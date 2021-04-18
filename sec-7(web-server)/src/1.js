const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))



const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const hbs = require('hbs')
const { title } = require('process')

// console.log(path.join(__dirname,'../public'));

// setup for static directories 


// to set up hbs
const publicpath = path.join(__dirname,'../public')
app.use(express.static(publicpath))

app.set('view engine','hbs')

// to set up a random path for views!
const viewspath = path.join(__dirname, '../templates/views')
app.set('views',viewspath)

const partialpaths = path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialpaths)


app.get('/',(req,res) => {
    res.render('index',{
        title: 'Weather Details',
        content:'Get the latest weather details here',
        name: 'rahul mahajan'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'About',
        name: 'Rahul Mahajan'
    })
})

app.get('/product',(req,res) => {

    if(!req.query.search){
        return res.send({
            error: 'You have to search something!'
        })
    }

    console.log(req.query.rating);
    res.send({
        products: []
    })
})


app.get('/weather', (req,res) => {

    if(!req.query.search){
        return res.send('Please enter the valid location for getting weather details!')
    }

    console.log(req.body.locat);

    geocode(req.query.search,(error,{ latitude, longitude, location } = {}) => {

        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                area: req.query.search
            })
        })
    
    })

})

app.get('/help', (req,res) => {
    res.render('help',{
        title: 'Help Section',
        name: 'Rahul Mahajan'
    })
})

app.get('*', (req,res) => {
    res.render('404',{
        name: 'rahul mahajan',
        title: '404'
    })
})

app.listen(port, () => {
    console.log('app running at port ' + port);
})