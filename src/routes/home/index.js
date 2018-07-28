import Hero from '../../components/Hero';
import IllustrationSection from '../../components/IllustrationSection';

const meetingsPage = require('../../assets/images/meetings-page.png');
const roomsPage = require('../../assets/images/rooms-page.png');

const Home = () => (
	<div>
		<Hero />

		<IllustrationSection
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
		/>
	</div>
);

export default Home;
