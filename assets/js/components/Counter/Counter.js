import React, { Component } from 'react';
import Button from './Button';

class Counter extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div id="counter-comp" style={styleCounterComp}>
				<div className="Number" style={styleNumber}>
					0
				</div>
				<div className="buttons" style={styleButtons}>
					<Button
						action="minus"
						hoverColor="white"
						backgroundColor="black"
						fontColor="black"
						fontColor2="white"
					>
						-
					</Button>
					<Button
						action="plus"
						hoverColor="black"
						backgroundColor="white"
						fontColor="white"
						fontColor2="black"
					>
						+
					</Button>
				</div>
			</div>
		);
	}
}

const styleCounterComp = {
	width: '100%',
	maxWidth: '400px',
	margin: '0 auto'
};

const styleNumber = {
	border: '3px solid black',
	padding: '20px',
	fontSize: '2rem',
	fontWeight: '900',
	textAlign: 'center'
};

const styleButtons = {
	display: 'flex'
};

export default Counter;
