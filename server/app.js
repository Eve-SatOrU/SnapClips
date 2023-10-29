// your main app
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const session = require('express-session');
const cors = require('cors');
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
// cors 
app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true,
  }
));

app.use(bodyParser.json());
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
