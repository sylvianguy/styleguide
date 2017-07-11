import React from 'react';
import { render } from 'react-dom';
import guideData from './src/services/guideService';
import Form from './src/components/Form';

import './src/styles/style.scss';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		// console.log(guideData.getGuides);
		guideData.getGuides().then((res) => {
			console.log(res);
			this.setState({
				data: res
			})
		});
	}
	render() {
		return (
			<div>
				<h1>Stuff goes here eventually</h1>
				<Form />
			</div>
		)
	}
}

render(<App />, document.getElementById('app'));