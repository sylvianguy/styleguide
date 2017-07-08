import React from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';


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
		return <h1>Stuff goes here eventually</h1>
	}
}

render(<App />, document.getElementById('app'));