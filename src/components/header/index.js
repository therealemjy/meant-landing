import Container from '../Container';
import Link from '../Link';
import Button from '../Button';

import style from './style';

const hermesLogo = require('../../assets/images/logo-blue.svg');

const Header = () => (
	<header class={style.header}>
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

export default Header;
