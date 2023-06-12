const express = require('express');
require('dotenv').config()
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

const PORT = process.env.PORT || 3000;

//log requests
app.use(morgan('tiny'));

// mongoDB Connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set('view engine','ejs');

//load assets
app.use('/css',express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js',express.static(path.resolve(__dirname, 'assets/js')));
app.use('/img',express.static(path.resolve(__dirname, 'assets/img')));

// Load Routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`));
