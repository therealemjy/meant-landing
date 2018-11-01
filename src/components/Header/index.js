import { Component } from 'preact';
import classNames from 'classnames';

import Container from '../Container';
import Link from '../Link';
import Button from '../Button';

import style from './style';

// const logo = require('../../assets/images/logo-blue.svg');

class Header extends Component {
	state = {
		isScrolled: false
	};

	onScroll = () => {
		if (typeof window === 'undefined') { return; }

		if (window.scrollY > 80 && !this.state.isScrolled) {
			this.setState({
				isScrolled: true
			});
		}
		else if (window.scrollY < 81 && this.state.isScrolled) {
			this.setState({
				isScrolled: false
			});
		}
	};

	componentDidMount = () => window.addEventListener('scroll', this.onScroll, false);
	componentWillUnmount = () => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', this.onScroll, false);
		}
	};

	render = () => (
		<header class={classNames(style.header, { [style.header_scrolled]: this.state.isScrolled })}>
			<Container className={style.container}>
				<a class={style.brand} href="/">
					{/* <img class={style.logo} src={logo} alt="Meant logo" /> */}

					<h3 class={style.name}>
						Meant
					</h3>
				</a>

				<div class={style.nav_container}>
					<div class={style.nav}>
						<Link href="https://app.meant.co/login" className={style.link_sign_in}>Log in</Link>
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Header;
