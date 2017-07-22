import React from 'react';
import { ajax } from 'jquery'; 
import guideData from '../services/guideService';
import styles from './Style';
import ReactFontFace from 'react-font-face';
import FontConfig from './FontConfig.js';


class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			guide: {
				title: '',
				created_by: '',
				colours: [],
				headingFont: '',
				bodyFont: '',
			},
			chosenFont: {},
			fontConfig: {},
		}
		this.handleChange = this.handleChange.bind(this);
		this.createGuide = this.createGuide.bind(this);
		this.changeFont = this.changeFont.bind(this);
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
	changeFont(e) {
		this.setState({
			chosenFont: e.target.value,
		})
	}
	render() {
		return (
			<form action="" onSubmit={this.createGuide}>
				<section className="themeBlock">
					<h3>colour palette</h3>
					<ul className="colours">
						<li className="colours--circ"></li>
						<li className="colours--circ"></li>
						<li className="colours--circ"></li>
						<li className="colours--circ"></li>
					</ul>
					<fieldset>
						<h4>Add Colours:</h4>
						<label className="label__icon" htmlFor="colours">
							<i className="fa fa-plus"></i>
							<input type="text" id="colours" name="colours" onChange={this.handleChange} required />
						</label>
					</fieldset>
				</section>
				<section className="themeBlock">
					<h3>font pairings</h3>
					<h5>heading font</h5>
					<fieldset>
						<h4>Heading Font:</h4>
						<h2 className="headingFont" style={styles[this.state.chosenFont]}>AWESOME</h2>
						<label className="label__icon" htmlFor="headingFont">
							<i className="fa fa-chevron-down"></i>
							<select name="headingFont" id="headingFont" onChange={this.changeFont} required>
								{this.props.fontInfo.map((option, i) => {
									return <option key={i} value={option.family}>{option.family}</option>
								})}
							</select>
						</label>
					</fieldset>
				</section>
				<section className="themeBlock">
					<fieldset>
						<h4>Created by:</h4>
						<label className="label__icon" htmlFor="created_by">
							<i className="fa fa-plus"></i>
							<input type="text" name="created_by" id="created_by" onChange={this.handleChange} required />
						</label>
					</fieldset>
				</section>
				<section className="themeBlock">
					<fieldset>
						<h4>Name of Theme:</h4>
						<label className="label__icon" htmlFor="title">
							<i className="fa fa-plus"></i>
							<input type="text" id="title" name="title" onChange={this.handleChange} required />
						</label>
					</fieldset>
				</section>
				<section className="themeBlock">
					<fieldset>
						<h4>Body Font:</h4>
						<label className="label__icon" htmlFor="bodyFont">
							<i className="fa fa-plus"></i>
							<input type="text" id="bodyFont" name="bodyFont" onChange={this.handleChange} required />
						</label>
					</fieldset>
				</section>
				<input type='submit' />
			</form>
		)
	}
}

export default ReactFontFace(Form, FontConfig);


