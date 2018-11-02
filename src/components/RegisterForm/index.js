import { Component } from 'preact';
import classNames from 'classnames';
import validator from 'validator';
import axios from 'axios';

import Button from '../Button';

import style from './style';

import googleLogo from '../../assets/images/logo-google.svg';

export default class RegisterForm extends Component {
	handleEmailChange = event =>
		this.setState({
			email: event.target.value,
			hasError: false
		});

	register = event => {
		event.preventDefault();

		const { email } = this.state;

		if (!validator.isEmail(email)) {
			return this.setState({
				hasError: true
			});
		}

		// Redirect to register page with email field pre-filled
		window.location.replace(`https://app.meant.co/register?email=${email}`);
	};

	googleSignIn = async () => {
		try {
			const result = await axios.post('https://accounts.google.com/o/oauth2/v2/auth', {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				},
				client_id: '557384855020-8h3325med62b1lv4lbsknfvt5rhpvrr8.apps.googleusercontent.com',
				redirect_uri: 'http://localhost:8080',
				response_type: 'token',
				scope:
					'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/admin.directory.group.readonly https://www.googleapis.com/auth/admin.directory.group.member.readonly'
			});

			console.log(result);
		}
		catch (error) {
			console.log(error);
		}
	};

	constructor() {
		super();

		this.state = {
			email: '',
			hasError: false
		};
	}

	render() {
		const { className, handleGoogleSignIn } = this.props;
		const { email, hasError } = this.state;

		return (
			<div className={classNames(style.container, className)}>
				<form className={style.row} onSubmit={this.register}>
					<input
						placeholder="Enter your email"
						className={classNames(style.input, { [style.has_error]: !!hasError })}
						value={email}
						onInput={this.handleEmailChange}
					/>
					<Button
						className={classNames(style.button, style.button_register)}
						onClick={this.register}
						content="Register"
					/>
				</form>

				<div className={style.row}>
					<Button
						onClick={handleGoogleSignIn}
						className={classNames(style.button, style.button_google)}
						content={
							<div className={style.button_google_content}>
								<img className={style.button_google_logo} src={googleLogo} />
								<span className={style.button_google_text}>Sign up with Google</span>
							</div>
						}
					/>
				</div>
			</div>
		);
	}
}
