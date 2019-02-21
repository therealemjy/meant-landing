import FirebaseContext from '../context/firebase';

const withFirebase = Component => props => (
	<FirebaseContext.Consumer>
		{firebase => <Component {...props} firebase={firebase} />}
	</FirebaseContext.Consumer>
);

export default withFirebase;