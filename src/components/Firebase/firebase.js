import app from 'firebase/app';
import 'firebase/auth';

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
	}

	doSignInWithGithub = () => {
		this.gitHubProvider.addScope('user');

		this.auth.signInWithPopup(this.gitHubProvider).then((result) => {
			// This gives you a GitHub Access Token. You can use it to access the GitHub API.
			let token = result.credential.accessToken;
			// The signed-in user info.
			let user = result.user;

			console.log('signInWithPopup resp ', token, user);
			// ...
		}).catch((error) => {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			// The email of the user's account used.
			let email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			let credential = error.credential;
			// ...
			console.log('signInWithPopup error ', errorCode, errorMessage, email, credential);
		});
	}

  doSignOut = () => this.auth.signOut();
}

export default Firebase;