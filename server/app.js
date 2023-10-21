// your main app
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const session = require('express-session');
// env 
require('dotenv').config();

const app = express();
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.set('view engine', 'pug');
// app.set('views', 'views');

// app.use(express.static('public'));


const routes = require('./routes/routes');
app.use('/', routes);

const controller = require('./controllers/controller');
const User = require('./models/user');

sequelize.sync()
.then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
