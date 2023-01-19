const express = require('express');
const router = express.Router();
const User = require('../database/secma/secma');
const bcrypt = require('bcryptjs');
const jwToken = require('jsonwebtoken');
const auth = require('../middleware/auth');
// const user = require('../middleware/auth')
// require('../middleware/auth')
// const jwt = require('jsonwebtoken');
console.log(User);
// require('./auth')


// import
router.get('/', auth ,async (req, res) => {    
  // const next = async function(next) {

 
  
    res.render('index')

  })

 



  router.get('/about', auth ,(req, res) => {

 
    res.render('about')
  })

router.get('/singin', (req, res) => {
  res.render('singin')
})


router.post('/singup', async(req, res) => {

    try {
    const {name, lastname, email, password} = req.body;
    console.log(name);

    if(!name || !lastname || !email || !password) {
      // res.emit('telluser', name)n
      res.status(404).send('pleased fill the form correctly yrr');
      
    } 

    else {

      const user =  await new User({
        name: name,
        lastname: lastname,
        email: email,
        password: password
      });



      // here
     
  
     const token =  user.generateToken()
     res.cookie("jwt",token, {
      expires: new Date(Date.now()+ 1000000),
      httpOnly:true,
      secure: true
      
      
      
      
     })

      // console.log("Your token is"+ token )

      res.cookie("jjwt", token)

      res.status(201).render('singin');
    
    console.log('now my work is finished');
    }
    } 
    catch(error) {
        console.log(error);
    }
});


router.post('/singin', async (req, res) => {


  try{

    const {email, password}  = await req.body;


    const hm = await User.findOne({email : email});
   
    
    const match = await bcrypt.compare(password , hm.password);


    const token = await hm.generateToken()
    console.log('Login token'+ token)
    res.cookie('jjwt', token)

    console.log(`This is the cookies awesome ${req.cookies.jjwt}`)

    console.log("the token part"+ token)
    console.log("Your token is"+ token )  
    if(match) {








      res.status(201).render('index', {name: hm.name
      });

 
    
   
} else {

  
  res.status(501).send('ohh sorry');
  // console.log(`your token is ${token}`);
  return;
}
// console.log(`Your email is ${email} and your password is ${password}}`);
// console.log )
console.log(`The user write ${password} == ${hm.password}`);


  } catch(error) {
    console.log(error)
   res.status(501).send('Invalid');

  }

 
})




  

module.exports = router
// module.exports = showError


// exports.showError = this.showError;

// module.exports = showError
// module.exports = showError;
 
           
