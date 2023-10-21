const User = require('../models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');
const { Op } = require('sequelize');
//index
// exports.getindex = async(req, res, next) => {
//   const user = req.session.user;
//   if (!user) {
//     return res.redirect('/login');
//   }
// };
User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt();
    user.userPassword = await bcrypt.hash(user.userPassword, salt);
  });
//login and register
// exports.getRegister = (req, res, next) => {
//     res.render('register', {
//       path: '/register',
//       pageTitle: 'register'
//     });
//   };
  function validateStrongPassword(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
      return false;
    }
  
    // Password must contain a combination of letters, numbers, and special characters
    const letterRegex = /[a-zA-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;
  
    if (!letterRegex.test(password) || !numberRegex.test(password) || !specialCharRegex.test(password)) {
      return false;
    }
  
    return true;
  }
  exports.postRegister = async (req, res, next) => {
      const { userName, userPassword, email } = req.body;
    
      // Perform input validation
      if (!validateStrongPassword(userPassword)) {
        return res.render('register', { error: 'Password must be at least 8 characters long and contain a combination of letters, numbers, and special characters.' });
      }
    
      // Check if username or email is already taken
      const existingUser = await User.findOne({
        where: { 
          [Op.or]: [
            { userName },
            { email }
          ]
        }
      });
      if (existingUser) {
        return res.render('register', { error: 'Username or email is already taken.' });
      }
      try {
        const user = await User.create({
          userName,
          userPassword,
          email
        });
        res.status(201).json({ message: 'User registered successfully' });
        res.redirect('/login');
      } catch (error) {
        res.status(500).json({ error: error.message });
    };
  };
  // exports.getLogin = (req, res, next) => {
  //   res.render('login', {
  //     path: '/login',
  //     pageTitle: 'login'
  //   });
  // };
  exports.postLogin= (async (req, res) => {
    const { userName, userPassword } = req.body;
    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return res.status(500).send('Something broken!');
    }
    const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);
    if (!isPasswordValid) {
      return res.status(500).send('your password wrong try again!');
    }
    else{
      req.session.user = user;
      req.session.userId = user.id; 
      res.redirect('/');
        }
  });
  //profile
  exports.getprofile = async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!req.session.user) {
      return res.redirect('/login');
    }
  };
    //logout
    exports.getLogout=async(req, res) => {
    console.log("User in session:", req.session.user);
      req.session.destroy();
      res.redirect('/');
  }; 