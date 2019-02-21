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
			let errorCode = error.code;
			let errorMessage = error.message;
			// The email of the user's account used.
			let email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			let credential = error.credential;

			console.log('signInWithPopup error ', errorCode, errorMessage, email, credential);
		}
	}

	onSuccessGitHubLogin = async args => {
		const result = await this.saveGithubUsers(args);

		
		console.log('data saved on backend ?', result);
	};

  doSignOut = () => this.auth.signOut();
}

export default Firebase;