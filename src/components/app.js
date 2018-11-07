import { Component } from 'preact';
import { Router } from 'preact-router';
import axios from 'axios';

import Context from '../context';
import Header from './Header';
import Footer from './Footer';

import { GOOGLE_CLIENT_ID, GOOGLE_SCOPE } from '../constants';
// Code-splitting is automated for routes
import Home from '../routes/home';
import PrivacyPolicy from '../routes/privacy-policy';
import TermsOfUse from '../routes/terms-of-use';

import 'normalize.css';
import style from './style';

const query = `
	query generateGoogleCalendarAuthUrl($scenario: String!) {
		generateGoogleCalendarAuthUrl(scenario: $scenario)
	}
`;

export default class App extends Component {
	state = {
		isScriptLoading: true
	};

	handleRoute = event => (this.currentUrl = event.url);

	handleGoogleSignIn = async () => {
		try {
			const { data: { data, errors } } = await axios.post(
				'http://localhost:3000/graphql',
				{
					query,
					variables: { scenario: 'teamCreation' }
				},
				{
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			);

			if (errors) {
				throw errors[0];
			}

			// Redirect to Google Auth URL
			window.location.replace(data.generateGoogleCalendarAuthUrl);
		}
		catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		let js;

		const d = document;
		const s = 'script';
		const id = 'google-platform';
		const gs = d.getElementsByTagName(s)[0];

		js = d.createElement(s);
		js.id = id;
		js.src = 'https://apis.google.com/js/platform.js';
		gs.parentNode.insertBefore(js, gs);

		js.onload = () =>
			window.gapi.load('auth2', () => {
				console.log('Loaded');

				this.setState({
					isScriptLoading: false
				});

				if (!window.gapi.auth2.getAuthInstance()) {
					window.gapi.auth2.init({
						fetch_basic_profile: false,
						client_id: GOOGLE_CLIENT_ID,
						scope: GOOGLE_SCOPE
					});
				}
			});
	}

	render() {
		const contextValue = {
			isScriptLoading: this.state.isScriptLoading,
			handleGoogleSignIn: this.handleGoogleSignIn
		};

		return (
			<Context.Provider value={contextValue}>
				<div id="app">
					<Header />

					<div class={style.container}>
						<Router onChange={this.handleRoute}>
							<Home path="/" />
							<PrivacyPolicy path="/privacy-policy" />
							<TermsOfUse path="/terms-of-use" />
						</Router>
					</div>

					<Footer />
				</div>
			</Context.Provider>
		);
	}
}
