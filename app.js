// Central control
// Fixed 29 / 01 / 2021
// --

const express = require('express');
const morgan = require('morgan');//HTTP Request Log
const app = express();

const PORT = 3000;

const indexRouter = require('./routes/index');



app.use(morgan('dev'));//morget Set
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/index', indexRouter);//index Router set

app.listen(PORT, () => { //Server Open
    console.log(`${PORT} Port Open`);
});