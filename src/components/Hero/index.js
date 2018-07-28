import Button from '../Button';
import H from '../H';
import P from '../P';
import Link from '../Link';

import style from './style';

const illustration = require('../../assets/images/illustration-calendar-users.svg');

const Hero = () => (
	<div class={style.hero}>
		<div class={style.container}>
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
		</div>
	</div>
);

export default Hero;
