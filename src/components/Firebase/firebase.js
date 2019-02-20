import app from 'firebase/app';

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
		console.log("I'm constructed babe");
	}
}

export default Firebase;