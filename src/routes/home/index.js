import Section from '../../components/Section';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import H from '../../components/H';
import P from '../../components/P';
import TitleSection from '../../components/TitleSection';
import IllustrationSection from '../../components/IllustrationSection';
import FeaturesSection from '../../components/FeaturesSection';
import TimeFinder from '../../components/TimeFinder';
import PlansSection from '../../components/PlansSection';

import style from './style';

const imagesAfterfix = (typeof window !== 'undefined') && window.devicePixelRatio > 1 ? '-retina' : '';
const meetingsPage = require(`../../assets/images/meetings-page${imagesAfterfix}.png`);
const roomsPage = require(`../../assets/images/rooms-page${imagesAfterfix}.png`);

const featuresIcons = {
	integrations: require('../../assets/images/integrations.svg'),
	flowlessExperience: require('../../assets/images/flowless-experience.svg'),
	notifications: require('../../assets/images/notifications.svg')
};

const Home = () => (
	<div>
		<Hero />

		<div class={style.features_container}>
			{/* <TitleSection
				title="A software you deserve"
				text="Timowl reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size."
			/> */}

			<IllustrationSection
				className={style.meetings_page_section}
				illustration={meetingsPage}
				features={[{
					title: 'Schedule',
					text: 'Organise meetings with members of your team and/or external guests.',
				}, {
					title: 'Follow up',
					text: "Track guests' attendance and receive updates on meeting changes in real time.",
				}]}
			/>

			<IllustrationSection
				illustration={roomsPage}
				features={[{
					title: 'Scale',
					text: 'Expand your workspace as your team grows. Timowl manages meeting rooms out-of-the-box.',
				}, {
					title: 'Browse',
					text: 'Find and reserve rooms based on your needs and availabilities, in real-time.',
				}]}
				reverse
			/>

			<Section className={style.time_finder_section}>
				<Section>
					<Container className={style.time_finder_container}>
						<H className={style.time_finder_section_title}>Plan smarter and faster</H>
						<TimeFinder className={style.time_finder} />
						<P>Our time finder quickly finds a time that works for all your guests and yourself.</P>
					</Container>
				</Section>
			</Section>

			<TitleSection
				title="All you need in one platform"
				text="No more juggling between several apps. Timowl is the only service you will ever need to schedule meetings within and outside your team."
				noPaddingBottom
			/>

			<FeaturesSection
				features={[{
					title: 'Useful integrations',
					text: 'Connect with the tools you already use and that make your life easier.',
					icon: featuresIcons.integrations
				}, {
					title: 'Flawless experience',
					text: 'Invite external guests using just their e-mail address. They will get notified and see the meeting on their calendar.',
					icon: featuresIcons.flowlessExperience
				}, {
					title: 'Clever notifications',
					text: 'Get notified when a meeting is about to start or has been updated, so you always stay in the loop.',
					icon: featuresIcons.notifications
				}]}
			/>

			<PlansSection
				className={style.plans_section}
			/>
		</div>
	</div>
);

export default Home;
