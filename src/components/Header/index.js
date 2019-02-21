import { Component } from 'preact';
import classNames from 'classnames';

import Container from '../Container';
// import Link from '../Link';

import style from './style';

const logo = require('../../assets/images/meant-logo.svg');

const Header = () => (
	<header className={style.header}>
		<Container className={style.container}>
			<a class={style.brand} href="/">
				<img class={style.logo} src={logo} alt="Meant logo" />
			</a>

			{/* <div class={style.nav_container}>
				<div class={style.nav}>
					<Link href="https://app.meant.co/login" className={style.link_sign_in}>Log in</Link>
				</div>
			</div> */}
		</Container>
	</header>
);

export default Header;
