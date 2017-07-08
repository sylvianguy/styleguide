import React from 'react';

class Form extends React.Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.createGuide = this.createGuide.bind(this);
	}
	handleChange(e) {
		console.log(e);

	}
	createGuide(e) {
		e.preventDefault();
		console.log("this works")
	}
	render() {
		return (
			<form action="" onSubmit={this.createGuide}>
				<label htmlFor="">Created by:</label>
				<input type="text" name="createdBy" onChange={this.handleChange} />
				<label htmlFor="">Name of Theme:</label>
				<input type="text" name="title" onChange={this.handleChange} />
				<label htmlFor="">Primary Colour:</label>
				<input type="text" name="primaryColour" onChange={this.handleChange} />
				<label htmlFor="">Secondary Colour:</label>
				<input type="text" name="secondaryColour" onChange={this.handleChange} />
				<label htmlFor="">Teriary Colour:</label>
				<input type="text" name="teriaryColour" onChange={this.handleChange} />
				<label htmlFor="">Heading Font:</label>
				<input type="text" name="headingFont" onChange={this.handleChange} />
				<label htmlFor="">Body Font:</label>
				<input type="text" name="bodyFont" onChange={this.handleChange} />
				<input type='submit' />
			</form>
		)
	}
}

export default Form;