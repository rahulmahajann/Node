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
        title: 'Main Page',
        name: 'rahul mahajan'
    })
})

app.get('/connectwdme', (req,res) => {
    res.send('connect with me at 9625281237')
})

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'About',
        name: 'Rahul Mahajan'
    })
})

app.get('/weather', (req,res) => {
    res.render('weather',{
        temp: '30' ,
        precip: '0%',
        descrip: 'cloudy',
        title: 'Weather Details',
        name: 'Rahul Mahajan'
    })
})

app.listen(5000, () => {
    console.log('app running at port 5000');
})