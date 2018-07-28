import Container from '../Container';
import Link from '../Link';

import style from './style';

const hermesLogo = require('../../assets/images/logo-grey.svg');

const Footer = () => (
	<footer class={style.footer}>
		<Container>
			<section class={[style.section, style.copyright].join(' ')}>
				<img class={style.logo} src={hermesLogo} alt="Grey Hermes Logo" />

				<span class={style.copyright_text}>Copyright &copy; 2018 Hermes</span>
			</section>

			<section class={[style.section, style.links_1].join(' ')}>
				<Link className={style.link} href="https://www.facebook.com/gethermes/">Facebook</Link>
				<Link className={style.link} href="https://twitter.com/MeetHermes">Twitter</Link>
				<Link className={style.link} href="mailto:hello@get-hermes.com">Contact us</Link>
			</section>

			<section class={[style.section, style.links_2].join(' ')}>
				<Link className={style.link} href="/terms-of-use">Terms of Use</Link>
				<Link className={style.link} href="/privacy-policy">Privacy Policy</Link>
			</section>
		</Container>
	</footer>
);

export default Footer;
