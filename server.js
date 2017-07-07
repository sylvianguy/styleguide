'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const styleguide = require('./api/models/styleguide');
const mongoose = require('mongoose');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const router = require('./api/index.js');

mongoose.connect('mongodb://localhost/styleguide');

app.use('/api/styleguide/', router);

//middleware 'use()'
app.use(bodyParser.json())

// Serve bundle.js
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'));

app.listen(3500);

