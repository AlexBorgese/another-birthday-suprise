import React, { Component } from 'react';

import Header from './components/Header.jsx';
import MainContent from './components/MainComponent.jsx';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainContent />
			</div>
		);
	}
}

export default App;
