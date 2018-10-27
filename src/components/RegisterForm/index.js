import { Component } from 'preact';
import classNames from 'classnames';

import Button from '../Button';

import style from './style';

import googleLogo from '../../assets/images/logo-google.svg';

export default class RegisterForm extends Component {
	constructor() {
		super();

		this.state = {
			email: ''
		};
	}

	handleEmailChange = event => this.setState({ email: event.target.value });

	render = () => {
		const { className } = this.props;
		const { email } = this.state;

		return (
			<form className={classNames(style.form, className)}>
				<div className={style.row}>
					<input
						type="email"
						placeholder="Enter your email"
						className={style.input}
						value={email}
						onChange={this.handleEmailChange}
					/>
					<Button className={classNames(style.button, style.button_register)} content="Register" />
				</div>

				<div className={style.row}>
					<Button
						className={classNames(style.button, style.button_google)}
						content={
							<div className={style.button_google_content}>
								<img className={style.button_google_logo} src={googleLogo} />
								<span className={style.button_google_text}>Sign up with Google</span>
							</div>
						}
					/>
				</div>
			</form>
		);
	};
}
