import { Component } from 'preact';
import { Router } from 'preact-router';

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
						<Home path="/" />
						<PrivacyPolicy path="/privacy-policy" />
						<TermsOfUse path="/terms-of-use" />
					</Router>

					<Footer />
				</div>
			</FirebaseContext.Provider>
		);
	}
}
