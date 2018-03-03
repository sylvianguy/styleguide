const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const styleguideSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	headingFont: {
		type: String,
		required: true
	},
	bodyFont: {
		type: String,
		required: true
	}, 
	colours: [{
		primary: String,
		secondary: String,
		third: String,
		fourth: String
	}],
	created_by: {
		type: String,
		required: true
	},
	created_at: {
		type: Number,
		default: Date.now
	}
});

//makes a collection called 'styleguide'
module.exports = mongoose.model('styleguide', styleguideSchema);

