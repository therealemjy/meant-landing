// import Context from '../../context';
import Section from '../../components/Section';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import H from '../../components/H';
import P from '../../components/P';
import TitleSection from '../../components/TitleSection';
import IllustrationSection from '../../components/IllustrationSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import FeaturesSection from '../../components/FeaturesSection';
import TimeFinder from '../../components/TimeFinder';
// import PlansSection from '../../components/PlansSection';
import PartnersSection from '../../components/PartnersSection';
import RegisterForm from '../../components/RegisterForm';

import style from './style';

const imagesAfterfix = typeof window !== 'undefined' && window.devicePixelRatio > 1 ? '-retina' : '';
const meetingsPage = require(`../../assets/images/meetings-page${imagesAfterfix}.png`);
const roomsPage = require(`../../assets/images/rooms-page${imagesAfterfix}.png`);

const featuresIcons = {
	integrations: require('../../assets/images/integrations.svg'),
	flowlessExperience: require('../../assets/images/flowless-experience.svg'),
	notifications: require('../../assets/images/notifications.svg')
};

const testimonialsPhotos = {
	adrien: require('../../assets/images/testimonials-photos/adrien.jpeg'),
	baptiste: require('../../assets/images/testimonials-photos/baptiste.jpeg')
};

const Home = () => (
	<div>
		<Hero />

		{/* <PartnersSection /> */}

		<div class={style.features_container}>
			{/* <TitleSection
				title="A software you deserve"
				text="Meant reduces the time spent in planning meetings, manages your meeting rooms and boosts your team’s productivity regardless of your company size."
			/> */}

			{/* <IllustrationSection
				className={style.meetings_page_section}
				illustration={meetingsPage}
				features={[{
					title: 'Schedule',
					text: 'Organise meetings with members of your team and/or external guests.'
				}, {
					title: 'Follow up',
					text: "Track guests' attendance and receive updates on meeting changes in real time."
				}]}
			/>

			<IllustrationSection
				illustration={roomsPage}
				features={[{
					title: 'Scale',
					text: 'Expand your workspace as your team grows. Meant manages meeting rooms out-of-the-box.'
				}, {
					title: 'Browse',
					text: 'Find and reserve rooms based on your needs and availabilities, in real-time.'
				}]}
				reverse
			/> */}

			{/* <Section className={style.time_finder_section}>
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
				text="No more juggling between several apps. Meant is the only service you will ever need to schedule meetings within and outside your team."
				noPaddingBottom
			/> */}

			{/* <FeaturesSection
				features={[
					{
						title: 'Useful integrations',
						text: 'Connect with the tools you already use and that make your life easier.',
						icon: featuresIcons.integrations
					},
					{
						title: 'Flawless experience',
						text:
							'Invite external guests using just their e-mail address. They will get notified and see the meeting on their calendar.',
						icon: featuresIcons.flowlessExperience
					},
					{
						title: 'Clever notifications',
						text:
							'Get notified when a meeting is about to start or has been updated, so you always stay in the loop.',
						icon: featuresIcons.notifications
					}
				]}
			/> */}

			{/* <TestimonialsSection
				testimonials={[
					{
						text:
							'Using Meant has made my life so much easier! Organising a meeting is nice and easy, no more waste of time trying to find a time that works for everyone: the platform does it for me.',
						name: 'Adrien Guilmineau',
						jobTitle: 'CEO at Sidekick',
						photo: testimonialsPhotos.adrien
					},
					{
						text:
							'Organising meetings has always been a nightmare, but Meant has the tools to fix it. The interface is clean and the support is amazing. I highly recommend giving them a try!',
						name: 'Baptiste Jamin',
						jobTitle: 'CEO & Co-founder at Crisp',
						photo: testimonialsPhotos.baptiste
					}
				]}
			/> */}

			{/* <PlansSection className={style.plans_section} /> */}

			{/* <Section className={style.register_section}>
				<TitleSection className={style.register_section_title} title="Meant makes teams more efficient" />

				<Container>
					<Context.Consumer>
						{context => <RegisterForm className={style.register_form} {...context} />}
					</Context.Consumer>
				</Container>
				<div class={style.background} >
					<svg class={style.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 112" enable-background="new 0 0 1440 112" preserveAspectRatio="none">
						<path fill="#f2f6fa" fill-rule="nonzero" d="M720 50.8063568c-155.55336-67.7418088-395.55336-67.7418088-720 0V112h1440V50.8063568c-324.44664 67.74180996-564.44664 67.74180996-720 0z" />
					</svg>
				</div>
			</Section> */}
		</div>
	</div>
);

export default Home;
