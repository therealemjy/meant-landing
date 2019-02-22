import { Component } from 'preact';
import { Router } from 'preact-router';
import Match from 'preact-router/match';

import Header from './Header';
import Footer from './Footer';
import Firebase from '../libs/firebase';
import FirebaseContext from '../context/firebase';

// Code-splitting is automated for routes
import Home from '../routes/home';
import PrivacyPolicy from '../routes/privacy-policy';
import TermsOfUse from '../routes/terms-of-use';

import 'normalize.css';

export default class App extends Component {
	handleRoute = event => (this.currentUrl = event.url);

	constructor(props) {
		super(props);

		this.state = {
			firebase: null
		};
	}

	componentDidMount() {
		if (typeof window !== 'undefined') {
			return this.setState({
				firebase: new Firebase()
			});
		}
	}

	render() {
		const { firebase } = this.state;
		return (
			<FirebaseContext.Provider value={firebase}>
				<div id="app">
					<Header />

					<Router onChange={this.handleRoute}>
						<Home default />
						<PrivacyPolicy path="/privacy-policy" />
						<TermsOfUse path="/terms-of-use" />
						<Match path="/:url_code">
							{ (props) => <Home {...props} /> }
						</Match>
					</Router>

					<Footer />
				</div>
			</FirebaseContext.Provider>
		);
	}
}
