import Section from '../../components/Section';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import H from '../../components/H';
import RegisterForm from '../../components/RegisterForm';
import IllustrationSection from '../../components/IllustrationSection';

import style from './style';

const imagesAfterfix = typeof window !== 'undefined' && window.devicePixelRatio > 1 ? '-retina' : '';
const meetingsPage = require(`../../assets/images/meetings-page${imagesAfterfix}.png`);
const roomsPage = require(`../../assets/images/rooms-page${imagesAfterfix}.png`);

const Home = () => (
	<div>
		<Hero />

		<IllustrationSection
			className={style.meetings_page_section}
			illustration={meetingsPage}
			features={[
				{
					title: 'Better code reviews',
					text:
						'Other developers of the team can watch the videos related to a pull request and quickly understand a piece of code.'
				}
			]}
			reverse
		/>

		<IllustrationSection
			illustration={roomsPage}
			features={[
				{
					title: 'Faster onboarding',
					text:
						'New developers joining the team get access to all the videos related to a repository, giving them an overview of the entire codebase and all the decisions taken throughout the project.'
				}
			]}
		/>

		<Section className={style.register_section}>
			<H className={style.register_section_title}>Request access now.</H>

			<Container>
				<RegisterForm className={style.register_section_form} />
			</Container>

			<div class={style.background}>
				<svg
					class={style.wave}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 112"
					enable-background="new 0 0 1440 112"
					preserveAspectRatio="none"
				>
					<path
						fill="#2b2c30"
						fill-rule="nonzero"
						d="M720 50.8063568c-155.55336-67.7418088-395.55336-67.7418088-720 0V112h1440V50.8063568c-324.44664 67.74180996-564.44664 67.74180996-720 0z"
					/>
				</svg>
			</div>
		</Section>
	</div>
);

export default Home;
