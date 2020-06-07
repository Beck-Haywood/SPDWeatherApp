const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
//485c2a6b9e4f16c28d7e45232a65c68b
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

            
//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.render('index')
  })

app.listen(3000, () => {
    console.log('Weather App hosted @ localhost:3000!');
  });
  
module.exports = app;