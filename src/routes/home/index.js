import Section from '../../components/Section';
import Hero from '../../components/Hero';
import TitleSection from '../../components/TitleSection';
import IllustrationSection from '../../components/IllustrationSection';
import FeaturesSection from '../../components/FeaturesSection';
import TimeFinder from '../../components/TimeFinder';
import PlansSection from '../../components/PlansSection';

import style from './style';

const imagesAfterfix = window.devicePixelRatio > 1 ? '-retina' : '';
const meetingsPage = require(`../../assets/images/meetings-page${imagesAfterfix}.png`);
const roomsPage = require(`../../assets/images/rooms-page${imagesAfterfix}.png`);

const Home = () => (
	<div>
		<Hero />

		<div class={style.features_container}>
			<TitleSection
				title="Loads of features"
				text="Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size."
			/>

			<IllustrationSection
				className={style.meetings_page_section}
				illustration={meetingsPage}
				features={[{
					title: 'Meeting management made easy',
					text: 'Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size.',
				}, {
					title: 'Meeting management made easy',
					text: 'Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size.',
				}]}
			/>

			<IllustrationSection
				illustration={roomsPage}
				features={[{
					title: 'Meeting management made easy',
					text: 'Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size.',
				}, {
					title: 'Meeting management made easy',
					text: 'Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size.',
				}]}
				reverse
			/>

			<Section>
				<TitleSection
					title="Time finder"
					text="Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size."
					noPaddingBottom
				/>
			
				<Section className={style.time_finder}>
					<TimeFinder />
				</Section>
			</Section>

			<TitleSection
				title="More features"
				text="Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size."
				noPaddingBottom
			/>

			<FeaturesSection
				features={[{
					title: 'Meeting management made easy',
					text: 'Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size.',
				}, {
					title: 'Meeting management made easy',
					text: 'Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size.',
				}, {
					title: 'Meeting management made easy',
					text: 'Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size.',
				}]}
			/>

			<PlansSection />
		</div>
	</div>
);

export default Home;
