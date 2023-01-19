const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.set({strictQuery : false});
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
dotenv.config({path:__dirname+'/dot.env'});
require('../database/col');
const PORT = process.env.PORT;






const staticPath = path.join(__dirname, '../public');
console.log(staticPath);
app.use(express.static(staticPath));



const templatePath = path.join(__dirname, '../templates/views');
const particalPath = path.join(__dirname, '../templates/partials');
console.log(templatePath)
 app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(particalPath);

app.use(require('./router'));



app.listen(PORT, () => {
    console.log('Done');
})