import Section from '../Section';
import Container from '../Container';
import TitleSection from '../TitleSection';
import H from '../H';
import P from '../P';
import Button from '../Button';

import style from './style';

const PlansSection = ({ className }) => (
	<Section className={className}>
		<TitleSection title="Simple and affordable pricing" lowPaddingBottom />
		
		<Container className={style.container}>
			<div class={style.plan}>
				<H className={style.plan_title} type="h3">Human</H>
				<H className={style.plan_price}>Free</H>

				<ul class={style.features_list}>
					<li class={style.list_item}>- <strong>Unlimited</strong> users</li>
					<li class={style.list_item}>- <strong>Unlimited</strong> meetings</li>
					<li class={style.list_item}>- Up to 5 meeting rooms <span class={style.list_item_note}>(unlimited during beta)</span></li>
					<li class={style.list_item}>- Time finder</li>
					<li class={style.list_item}>- Integration with Google Calendar</li>
				</ul>

				<Button className={style.button} label="Register now" />

				<P className={style.button_note}>No credit card needed</P>
			</div>

			<div class={style.plan}>
				<H className={style.plan_title} type="h3">Human</H>
				<H className={style.plan_price}>Free</H>

				<ul class={style.features_list}>
					<li class={style.list_item}>- <strong>Unlimited</strong> users</li>
					<li class={style.list_item}>- <strong>Unlimited</strong> meetings</li>
					<li class={style.list_item}>- Up to 5 meeting rooms <span class={style.list_item_note}>(unlimited during beta)</span></li>
					<li class={style.list_item}>- Time finder</li>
					<li class={style.list_item}>- Integration with Google Calendar</li>
				</ul>

				<Button className={style.button} label="Register now" />

				<P className={style.button_note}>No credit card needed</P>
			</div>
		</Container>
	</Section>
);

export default PlansSection;
