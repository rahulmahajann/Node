const path = require('path')
const express = require('express')

const app = express()

// console.log(path.join(__dirname,'../public'));

const publicpath = path.join(__dirname,'../public')

app.use(express.static(publicpath))

app.get('/',(req,res) => {
    res.send('rahul mahajan')
})

app.get('/connectwdme', (req,res) => {
    res.send('connect with me at 9625281237')
})

app.get('/about', (req,res) => {
    res.send('cse from ggsipu')
})

app.get('/weather', (req,res) => {
    res.send('<h1>weather details!</h1>')
})

app.listen(3000, () => {
    console.log('app running at port 3000');
})