import { Component } from 'preact';
import classNames from 'classnames';

import Container from '../Container';
import Link from '../Link';
import Button from '../Button';

import style from './style';

const hermesLogo = require('../../assets/images/logo-blue.svg');

class Header extends Component {
	state = {
		isScrolled: false,
	};

	onScroll = () => {
		if (window.scrollY > 80 && !this.state.isScrolled) {
			this.setState({
				isScrolled: true,
			});
		}
		else if (window.scrollY < 81 && this.state.isScrolled) {
			this.setState({
				isScrolled: false,
			});
		}
	};

	componentWillMount = () => window.addEventListener('scroll', this.onScroll, false);
	componentWillUnmount = () => window.removeEventListener('scroll', this.onScroll, false);

	render = () => (
		<header class={classNames(style.header, { [style.header_scrolled]: this.state.isScrolled })}>
			<Container className={style.container}>
				<div class={style.brand}>
					<img class={style.logo} src={hermesLogo} alt="Hermes logo" />

					<h3 class={style.name}>
						Hermes
					</h3>
				</div>

				<div class={style.nav_container}>
					<div class={style.nav}>
						<Link href="" className={style.link_pricing}>Pricing</Link>
						<Link href="" className={style.link_sign_in}>Sign in</Link>

						<Button
							className={style.button}
							label="Register"
							onClick={() => {}}
							skeleton
						/>
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Header;
