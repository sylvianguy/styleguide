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

// Serve your static assets here. You'll need to use express.static middleware.
// app.use('/api/styleguide', require('./api'));
// require('./api/models/styleguide');

app.get('/api/styleguide', (req,res) => {
	res.send('Notes Api');
});

// If none of the above matches, serve public/index.html.
// app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(3500);

