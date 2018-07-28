import Hero from '../../components/Hero';
import TitleSection from '../../components/TitleSection';
import IllustrationSection from '../../components/IllustrationSection';
import FeaturesSection from '../../components/FeaturesSection';

import style from './style';

const meetingsPage = require('../../assets/images/meetings-page.png');
const roomsPage = require('../../assets/images/rooms-page.png');

const Home = () => (
	<div>
		<Hero />

		<div class={style.features_container}>
			<TitleSection
				title="Loads of features"
				text="Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size."
			/>

			<IllustrationSection
				className={style.meetingsPageSection}
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
				className={style.roomsPageSection}
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

			<div class={style.timefinder_section}>
				<TitleSection
					title="Time finder"
					text="Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size."
				/>
			
				<div class={style.timefinder}>
					TIME FINDER ANIMATION HERE
				</div>
			</div>

			<div class={style.features_section}>
				<TitleSection
					title="More features"
					text="Hermes reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size."
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
			</div>
		</div>
	</div>
);

export default Home;
