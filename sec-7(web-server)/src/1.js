const path = require('path')
const express = require('express')
const app = express()

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

    res.send({
        forecast: "it's hot sunny day", 
        place: req.query.search,
        temp: '32 degs'
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

app.listen(5000, () => {
    console.log('app running at port 5000');
})