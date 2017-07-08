import React from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';
import Form from './components/Form';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		ajax({
			url: "http://localhost:3500/api/styleguide/get",
			method:'GET' 
		})
		.then((res) => {
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