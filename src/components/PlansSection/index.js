import classNames from 'classnames';

import Section from '../Section';
import Container from '../Container';
import TitleSection from '../TitleSection';
import Plan from '../Plan';

import style from './style';

const illustrationHumans = require('../../assets/images/illustration-humans.svg');
const illustrationGods = require('../../assets/images/illustration-gods.svg');

const PlansSection = ({ className }) => (
	<Section className={classNames(style.plans_section, className)}>
		<TitleSection className={style.title} title="One pricing, for teams of all sizes" />

		<div class={style.background} >
			<svg class={style.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 112" enable-background="new 0 0 1440 112" preserveAspectRatio="none">
				<path fill="#F2F6FA" fill-rule="nonzero" d="M720 50.8063568c-155.55336-67.7418088-395.55336-67.7418088-720 0V112h1440V50.8063568c-324.44664 67.74180996-564.44664 67.74180996-720 0z" />
			</svg>

			<div class={style.colored_background} />
		</div>

		<Container>
			<Plan
				className={style.plan}
				name="Professionals"
				price="£9"
				note="per user, per month"
			>
				<img
					class={[style.illustration, style.illustration_left].join(' ')}
					src={illustrationHumans}
					alt=""
				/>

				<ul class={style.features_list}>
					<li class={style.list_item}>- <strong>Unlimited</strong> meetings</li>
					<li class={style.list_item}>- <strong>Unlimited</strong> meeting rooms</li>
					<li class={style.list_item}>- <strong>Unlimited</strong> integrations</li>
					<li class={style.list_item}>- <strong>Custom support</strong></li>
					<li class={style.list_item}>- <strong>Personnalised team setup</strong></li>
				</ul>

				<img
					class={[style.illustration, style.illustration_right].join(' ')}
					src={illustrationGods}
					alt=""
				/>
			</Plan>
		</Container>
	</Section>
);

export default PlansSection;
