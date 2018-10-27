import Container from '../Container';
import RegisterForm from '../RegisterForm';
import H from '../H';
import P from '../P';

import style from './style';

const illustration = require('../../assets/images/illustration-calendar-users.svg');

const Hero = () => (
	<div class={style.hero}>
		<Container>
			<section class={style.block}>
				<H className={style.title} type="h1">Finally a calendar for professionals</H>

				<P className={style.paragraph}>
					Simple calendar with powerful features to organise meetings faster, within and outside your team.
				</P>

				<RegisterForm className={style.register_form} />
			</section>

			<section class={style.illustration_container}>
				<img
					class={style.illustration}
					src={illustration}
					alt="Timowl is your central place for meeting and meeting rooms management"
				/>
			</section>

			<svg xmlns="http://www.w3.org/2000/svg" class={style.wave} viewBox="0 0 1440 107" enable-background="new 0 0 1440 107" preserveAspectRatio="none">
				<path fill="#FFF" fill-rule="nonzero" d="M720 38.936531C571.07999 57.866238 321 119.5040168 0 41.09718v66.4480438h1440V40.491756c-320.2408-78.406837-571.07999-20.484932-720-1.555225z" />
			</svg>
		</Container>
	</div>
);

export default Hero;
