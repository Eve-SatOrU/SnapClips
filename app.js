// your main app
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const session = require('express-session');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

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
// add array

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
const routes = require('./routes/routes');
app.use('/', routes);

const controller = require('./controllers/controller');
const User = require('./models/user');
// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

sequelize.sync()
.then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
