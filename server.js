const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const api = require('./api')
// const bodyParser = require('body-parser')

//485c2a6b9e4f16c28d7e45232a65c68b
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// Get CSS
app.use(express.static('public'))

// app.use(bodyParser.urlencoded({ extended: false }))

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');


// Routes
// app.get('/', (req, res) => {
//     res.render('index')
//   })
app.get('/', async (req, res) => {
  try {
      let weather = req.query.city ? await api.getWeatherData(req.query.city) : await api.getWeatherData('San Francisco')
      console.log(weather)
      
      res.render('index', { weather })
  } catch (err){
      console.error(err)
  }
})

app.listen(3000, () => {
    console.log('Weather App hosted @ localhost:3000!');
  });
  
module.exports = app;