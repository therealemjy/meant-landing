import classNames from 'classnames';

import Section from '../Section';
import Container from '../Container';
import TitleSection from '../TitleSection';
import Plan from '../Plan';
import H from '../H';

import style from './style';

const PlansSection = ({ className }) => (
	<Section className={classNames(style.plans_section, className)}>
		<TitleSection className={style.title} title="Simple and affordable pricing" />

		<div class={style.background} >
			<svg class={style.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 112" enable-background="new 0 0 1440 112" preserveAspectRatio="none">
				<path fill="#F2F6FA" fill-rule="nonzero" d="M720 50.8063568c-155.55336-67.7418088-395.55336-67.7418088-720 0V112h1440V50.8063568c-324.44664 67.74180996-564.44664 67.74180996-720 0z" />
			</svg>

			<div class={style.colored_background} />
		</div>

		<Container className={style.container}>
			<Plan
				className={style.plan}
				name="Human"
				price="Free"
				bottomNote="No credit card needed"
				buttonLabel="Register now"
				to="https://app.get-hermes.com/register"
			>
				<ul class={style.features_list}>
					<li class={style.list_item}>- <strong>Unlimited</strong> users</li>
					<li class={style.list_item}>- <strong>Unlimited</strong> meetings</li>
					<li class={style.list_item}>- Up to 5 meeting rooms <span class={style.list_item_note}>(unlimited during beta)</span></li>
					<li class={style.list_item}>- Time finder</li>
					<li class={style.list_item}>- Integration with Google Calendar</li>
				</ul>
			</Plan>

			<Plan className={style.plan} name="God">
				<H type="h3" className={style.coming_soon}>Coming soon</H>
			</Plan>
		</Container>
	</Section>
);

export default PlansSection;
