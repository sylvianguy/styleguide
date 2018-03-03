import React from 'react';
import { render } from 'react-dom';
import guideData from './src/services/guideService';
import { ajax } from 'jquery';
import Form from './src/components/Form';
import Header from './src/components/Header';

import './src/styles/style.scss';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			loadedFonts: [],
			popularFonts: [
				'Playfair Display',
				'Lato',
				'Raleway',
			]
		}
	}
	componentDidMount() {
		guideData.getGuides().then((res) => {
			console.log(res);
			this.setState({
				data: res
			})
		});

		const popularFonts = this.state.popularFonts;

		guideData.getFonts().then((data) => {
				let newFonts = data.items.filter((font) => {
					return popularFonts.includes(font.family)
				});

				this.setState({
					loadedFonts: newFonts
				})
		});
	}

	render() {
		return (
			<div>
				<Header />
				<div className="wrapper">
					<h1>Stuff goes here eventually</h1>
					<Form
						fonts={this.state.popularFonts}
						fontInfo={this.state.loadedFonts}
					/>
				</div>
			</div>
		)
	}
}

render(<App />, document.getElementById('app'));