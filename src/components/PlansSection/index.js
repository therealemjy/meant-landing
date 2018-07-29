import Section from '../Section';
import Container from '../Container';
import TitleSection from '../TitleSection';
import Plan from '../Plan';
import H from '../H';

import style from './style';

const PlansSection = ({ className }) => (
	<Section className={className}>
		<TitleSection title="Simple and affordable pricing" lowPaddingBottom />
		
		<Container className={style.container}>
			<Plan
				className={style.plan}
				name="Human"
				price="Free"
				bottomNote="No Credit card needed"
				buttonLabel="Register now"
				onClick={() => console.log('CLIKED')}
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
