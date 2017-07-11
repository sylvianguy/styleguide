import React from 'react';
import { ajax } from 'jquery'; 
import guideData from '../services/guideService';

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			guide: {
				title: '',
				created_by: '',
				primaryColour: '',
				secondaryColour: '',
				teriaryColour: '',
				headingFont: '',
				bodyFont: ''
			}
		}
		this.handleChange = this.handleChange.bind(this);
		this.createGuide = this.createGuide.bind(this);
	}
	handleChange(e) {
		const guide = Object.assign({}, this.state.guide);

		guide[e.target.name] = e.target.value;

		this.setState({
			guide
		});
	}
	createGuide(e) {
		e.preventDefault();
		const guide = Object.assign({}, this.state.guide);

		guideData.createGuide(this.state.guide)
			.then(console.log);
	}
	render() {
		return (
			<form action="" onSubmit={this.createGuide}>
				<fieldset>
					<label htmlFor="">Created by:</label>
					<input type="text" name="created_by" onChange={this.handleChange} />
				</fieldset>
				<fieldset>
					<label htmlFor="">Name of Theme:</label>
					<input type="text" name="title" onChange={this.handleChange} />
				</fieldset>
				<fieldset>
					<label htmlFor="">Primary Colour:</label>
					<input type="text" name="primaryColour" onChange={this.handleChange} />
				</fieldset>
				<fieldset>
					<label htmlFor="">Secondary Colour:</label>
					<input type="text" name="secondaryColour" onChange={this.handleChange} />
				</fieldset>
				<fieldset>
					<label htmlFor="">Teriary Colour:</label>
					<input type="text" name="teriaryColour" onChange={this.handleChange} />
				</fieldset>
				<fieldset>
					<label htmlFor="">Heading Font:</label>
					<input type="text" name="headingFont" onChange={this.handleChange} />
				</fieldset>
				<fieldset>
					<label htmlFor="">Body Font:</label>
					<input type="text" name="bodyFont" onChange={this.handleChange} />
				</fieldset>
				<input type='submit' />
			</form>
		)
	}
}

export default Form;