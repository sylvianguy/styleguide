import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
	render() {
		return <h1>Hell is this working?</h1>
	}
}

render(<App />, document.getElementById('app'));