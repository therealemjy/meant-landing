import { Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {
	handleRoute = event => this.currentUrl = event.url;

	render = () => (
		<div id="app">
			<Header />
			<Router onChange={this.handleRoute}>
				<Home path="/" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
		</div>
	);
}
