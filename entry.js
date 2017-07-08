import React from 'react';
import { render } from 'react-dom';
import { ajax } from 'jquery';


class App extends React.Component {
	componentDidMount() {
		ajax({
			url: "http://localhost:3500/api/styleguide/get",
			method:'GET' 
		})
		.then(console.log)
	}
	render() {
		return <h1>Hesads is this working?</h1>
	}
}

render(<App />, document.getElementById('app'));