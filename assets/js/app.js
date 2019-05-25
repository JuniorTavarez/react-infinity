import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'container'}>
				<div>
					<Counter status="auto" />
				</div>
			</div>
		);
	}
}

const Header1 = props => {
	return <h1>{props.children}</h1>;
};

ReactDOM.render(<App />, document.getElementById('app'));
