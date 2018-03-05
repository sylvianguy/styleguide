import React from 'react';
import { render } from 'react-dom';

import guideData from './src/services/guideService';
import Form from './src/components/Form';
import Header from './src/components/Header';
import fonts from './src/components/Fonts';

import './src/styles/style.scss';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			loadedFonts: [],
		}
	}
	componentDidMount() {
		//returns all style guides from database
		guideData.getGuides().then((res) => {
			console.log(res);
			this.setState({
				data: res
			})
		});

		//retrieves listed fonts and pushes it to an array
		const loadedFonts = Array.from(this.state.loadedFonts);
		for(let key in fonts) {
			const chosenFonts = fonts[key];
			loadedFonts.push(chosenFonts)
		}

		//makes request to Google fonts API and filters down to only desired font objects
		guideData.getFonts().then((data) => {
			const fontFam = loadedFonts.map(font => font.fontFamily.split(',')[0]);
			const filteredFonts = data.items.filter(font => fontFam.includes(font.family))

			this.setState({
				loadedFonts: filteredFonts
			})
		});
	}

	render() {
		return (
			<div>
				<Header />
				<div className="wrapper">
					<Form
						fontInfo={this.state.loadedFonts}
					/>
				</div>
			</div>
		)
	}
}

render(<App />, document.getElementById('app'));