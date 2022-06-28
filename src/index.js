const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000 

app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({ extname: '.hbs'}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));
// app.set('views', './resources/views');

console.log("123:"+__dirname);


app.get('/', (req, res) => {
    res.render('home')
})


app.get('/tin-tuc', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})