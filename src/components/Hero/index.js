import Button from '../Button';
import style from './style';

const illustration = require('../../assets/images/illustration-calendar-users.svg');

const Hero = () => (
	<div class={style.hero}>
		<div class={style.container}>
			<section class={style.block}>
				<h1 class={style.title}>Meeting management made easy</h1>

				<p class={style.text}>
					Hermes reduces the time spent in planning meetings, manages your meeting rooms
					and boosts your team’s productivity regardless of your company size.{' '}
					<a href="" class={style.link}>Read more</a>
				</p>

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
