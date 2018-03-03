import React from 'react';
import { ajax } from 'jquery'; 
import guideData from '../services/guideService';
import fonts from './Fonts';
import ReactFontFace from 'react-font-face';
import FontConfig from './FontConfig.js';
import ColorScheme from './ColorScheme.js';


class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			guide: {
				title: '',
				created_by: '',
				colours: [
					{
						'primary': '',
						'secondary': '',
						'third': '',
						'fourth': ''
					}	
				],
				headingFont: '',
				bodyFont: '',
			},
			selectedColor: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.createGuide = this.createGuide.bind(this);
		this.changeColor = this.changeColor.bind(this);
		this.colorSelection = this.colorSelection.bind(this);
		this.saveColors = this.saveColors.bind(this);
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

	colorSelection(e) {
		const guide = Object.assign({}, this.state.guide);
		guide.colours[0][this.state.selectedColor] = e.target.value
		this.setState({
			guide
		})
	}

	changeColor(e) {
		const guide = Object.assign({}, this.state.guide);
		this.setState({
			selectedColor: e.target.id
		})
	}
	
	saveColors() {
		console.log('hi');
	}
	render() {
		const style = {
			"primary": {
				background: this.state.guide.colours[0].primary
			},
			"secondary": {
				background: this.state.guide.colours[0].secondary
			},
			"third": {
				background: this.state.guide.colours[0].third
			},
			"fourth": {
				background: this.state.guide.colours[0].fourth
			},
		}
		return (
			<form action="" onSubmit={this.createGuide}>
				<section className="themeBlock">
					<ColorScheme
						styles={style}
						changeColor={this.changeColor}
						selectedColor={this.state.selectedColor}
						saveColors={this.saveColors}
						colorSelection={this.colorSelection}
					/>
				</section>
				<section className="themeBlock">
					<h3>font pairings</h3>
					<h5>heading font</h5>
					<fieldset>
						<h4>Heading Font:</h4>
						<h2
							className="headingFont"
							style={fonts[this.state.guide.headingFont]}>
							Awesome Font
						</h2>
						<label className="label__icon" htmlFor="headingFont">
							<i className="fa fa-chevron-down"></i>
							<select name="headingFont" id="headingFont" onChange={this.handleChange} required>
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
							<input
								type="text"
								name="created_by"
								id="created_by"
								onChange={this.handleChange}
								required
							/>
						</label>
					</fieldset>
				</section>
				<section className="themeBlock">
					<fieldset>
						<h4>Name of Theme:</h4>
						<label className="label__icon" htmlFor="title">
							<i className="fa fa-plus"></i>
							<input
								type="text"
								id="title"
								name="title"
								onChange={this.handleChange}
								required
							/>
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


