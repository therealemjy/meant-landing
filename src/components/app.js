import { Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Footer from './Footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import PrivacyPolicy from '../routes/privacy-policy';

import 'normalize.css';
import style from './style';

export default class App extends Component {
	handleRoute = event => this.currentUrl = event.url;

	render = () => (
		<div id="app">
			<Header />

			<div class={style.container}>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<PrivacyPolicy path="/privacy-policy" />
					{/* <TermsOfUse path="/terms-of-use" /> */}
				</Router>
			</div>

			<Footer />
		</div>
	);
}
