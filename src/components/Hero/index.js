import Container from '../Container';
import Button from '../Button';
import H from '../H';
import P from '../P';
import Link from '../Link';

import style from './style';

const illustration = require('../../assets/images/illustration-calendar-users.svg');

const Hero = () => (
	<div class={style.hero}>
		<Container>
			<section class={style.block}>
				<H type="h1">Meeting management made easy</H>

				<P>
					Hermes reduces the time spent in planning meetings, manages your meeting rooms
					and boosts your team’s productivity regardless of your company size.{' '}
					<Link href="" className={style.link}>Read more</Link>
				</P>

				<Button label="Get started" onClick={() => {}} />
			</section>

			<section class={style.illustration_container}>
				<img
					class={style.illustration}
					src={illustration}
					alt="Hermes is your central place for meeting and meeting rooms management"
				/>
			</section>
			
			<svg xmlns="http://www.w3.org/2000/svg" class={style.wave} viewBox="0 0 1440 128" enable-background="new 0 0 1440 128" preserveAspectRatio="none">
				<path fill="#FFF" fill-rule="nonzero" d="M720 50.239c-145.64 54.625-399 78.306-720 0v78.306h1440V50.239c-320.24-78.306-574.36-54.626-720 0z" />
			</svg>
		</Container>
	</div>
);

export default Hero;
