'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const styleguide = require('./api/models/styleguide');
const mongoose = require('mongoose');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const router = require('./api/index.js');
// const css = require('./src/styles/style.scss');


//this allows for cross origin access from any port
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-length, Accept, x-access-token');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
}); 

//keep this script at top of the file
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/styleguide');

app.use('/api/styleguide/', router);

// Serve bundle.js
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'));

app.listen(3500);

