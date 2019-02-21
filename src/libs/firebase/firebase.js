import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';

const config = {
	apiKey: 'AIzaSyA7fKjbsiMwkJDmZtBI_USFxo1wGeIdhhk',
	authDomain: 'meant-beta.firebaseapp.com',
	databaseURL: 'https://meant-beta.firebaseio.com',
	projectId: 'meant-beta',
	storageBucket: 'meant-beta.appspot.com',
	messagingSenderId: '745848353385'
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
		this.gitHubProvider = new app.auth.GithubAuthProvider();
		this.saveGithubUsers = app.functions().httpsCallable('saveGithubUsers');
	}

	doSignInWithGithub =  async () => {
		// log in GA
		window.ga('send', {
			hitType: 'event',
			eventCategory: 'Subscription',
			eventAction: 'landing-cta',
			eventLabel: 'Initiate'
		});

		try {
			this.gitHubProvider.addScope('user');

			const result = await this.auth.signInWithPopup(this.gitHubProvider);
	
			const token = result.credential.accessToken;
			const user = result.user;
	
			return await this.onSuccessGitHubLogin({
				accessToken: token,
				displayName: user.displayName,
				email: user.email
			});
		}
		catch (error) {
			// let errorCode = error.code;
			// let errorMessage = error.message;
			// // The email of the user's account used.
			// let email = error.email;
			// // The firebase.auth.AuthCredential type that was used.
			// let credential = error.credential;
			// log in GA
			window.ga('send', {
				hitType: 'event',
				eventCategory: 'Subscription',
				eventAction: 'landing-cta',
				eventLabel: 'Error github'
			});
		}
	}

	onSuccessGitHubLogin = async args => {
		const result = await this.saveGithubUsers(args);

		// log success in GA
		window.ga('send', {
			hitType: 'event',
			eventCategory: 'Subscription',
			eventAction: 'landing-cta',
			eventLabel: 'Success'
		});

		// TODO: add facebook pixel here

		// check here if error or something
		return result;
	};
}

export default Firebase;