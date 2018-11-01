import Container from '../Container';
import Link from '../Link';

import style from './style';

// const logo = require('../../assets/images/logo-grey.svg');

const Footer = () => (
	<footer class={style.footer}>
		<Container className={style.container}>
			<div class={[style.section, style.copyright].join(' ')}>
				{/* <img class={style.logo} src={logo} alt="Grey Meant Logo" /> */}
				<span class={style.copyright_text}>Copyright &copy; 2018 Meant</span>
				<span class={style.copyright_family}>
					Part of{' '}
					<a
						className={style.link_thefamily}
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.thefamily.co/"
					>
						TheFamily 🖤
					</a>
				</span>
			</div>

			<div class={[style.section, style.links_1].join(' ')}>
				<Link className={style.link} href="https://www.facebook.com/gethermes/">
					Facebook
				</Link>
				<Link className={style.link} href="https://twitter.com/MeetHermes">
					Twitter
				</Link>
				<Link className={style.link} href="mailto:hello@meant.co">
					Contact us
				</Link>
			</div>

			<div class={[style.section, style.links_2].join(' ')}>
				<Link className={style.link} href="/terms-of-use">
					Terms of Use
				</Link>
				<Link className={style.link} href="/privacy-policy">
					Privacy Policy
				</Link>
			</div>
		</Container>
	</footer>
);

export default Footer;
