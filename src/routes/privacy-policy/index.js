import { Component } from 'preact';

import style from './style';

export default class Profile extends Component {
	render() {
		return (
			<div class={style.profile}>
				<h1>Profile: test</h1>
				<p>This is the user profile for a user named.</p>
			</div>
		);
	}
}
