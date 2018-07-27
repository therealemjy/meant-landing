import style from './style';

const hermesLogo = require('../../assets/images/logo-grey.svg');

const Footer = () => (
	<footer class={style.footer}>
		<div class={style.container}>
			<section class={[style.section, style.copyright].join(' ')}>
				<img class={style.logo} src={hermesLogo} alt="Grey Hermes Logo" />

				<span class={style.copyright_text}>Copyright &copy; 2018 Hermes</span>
			</section>

			<section class={[style.section, style.links_1].join(' ')}>
				<a class={style.link} href="https://www.facebook.com/gethermes/" target="_blank">Facebook</a>
				<a class={style.link} href="https://twitter.com/MeetHermes" target="_blank">Twitter</a>
				<a class={style.link} href="mailto:hello@get-hermes.com">Contact us</a>
			</section>

			<section class={[style.section, style.links_2].join(' ')}>
				<a class={style.link} href="/terms-of-use">Terms of Use</a>
				<a class={style.link} href="/privacy-policy">Privacy Policy</a>
			</section>
		</div>
	</footer>
);

export default Footer;
