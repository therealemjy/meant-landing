import Button from '../Button';
import style from './style';

const hermesLogo = require('../../assets/images/logo-blue.svg');

const Header = () => (
	<header class={style.header}>
		<div class={style.container}>
			<section class={style.brand}>
				<img class={style.logo} src={hermesLogo} alt="Hermes logo" />

				<h3 class={style.name}>
					Hermes
				</h3>
			</section>

			<section class={style.nav_container}>
				<div class={style.nav}>
					<a href="" class={[style.link, style.link_pricing].join(' ')}>Pricing</a>
					<a href="" class={[style.link, style.link_sign_in].join(' ')}>Sign in</a>

					<Button label="Register" skeleton onClick={() => {}} />
				</div>
			</section>
		</div>
	</header>
);

export default Header;
