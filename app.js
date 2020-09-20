const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");


const FenceRoutes = require('./api/routes/geofence');

// to log requests
app.use(morgan('dev'));
app.use(cors());
// to parse the incoming request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handling cross origin resource  sharing error 


app.use('/fence', FenceRoutes);


// Handing wrong routes
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;