const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const styleguideSchema = new Schema({
	name: String,
	headingFont: String,
	bodyFont: String,
	primaryColour: String,
	secondaryColour: String,
	teriaryColour: String,
	created_by: String,
	created_at: {
		type: Number,
		default: Date.now
	}
});

//makes a collection called 'styleguide'
module.exports = mongoose.model('styleguide', styleguideSchema);

