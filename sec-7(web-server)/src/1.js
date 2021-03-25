const path = require('path')
const express = require('express')

const app = express()

// console.log(path.join(__dirname,'../public'));

const publicpath = path.join(__dirname,'../public')


// to set up hbs
app.set('view engine','hbs')
app.use(express.static(publicpath))


// to set up a random path for views!
const viewspath = path.join(__dirname, '../templates')
app.set('views',viewspath)



app.get('/',(req,res) => {
    res.render('index',{
        title: 'weather',
        name: 'rahul mahajan'
    })
})

// app.get('/connectwdme', (req,res) => {
//     res.send('connect with me at 9625281237')
// })

app.get('/about', (req,res) => {
    res.render('about')
})

app.get('/weather', (req,res) => {
    res.render('weather',{
        temp: '30' ,
        precip: '0%',
        descrip: 'cloudy'
    })
})

app.listen(5000, () => {
    console.log('app running at port 5000');
})