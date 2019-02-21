import Section from '../../components/Section';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import H from '../../components/H';
import RegisterForm from '../../components/RegisterForm';
import IllustrationSection from '../../components/IllustrationSection';

import style from './style';

const codeReviewVideo = require(`../../assets/images/pull-request-review-video.svg`);
const fasterOnboarding = require(`../../assets/images/faster-onboarding.svg`);

const Home = () => (
	<div>
		<Hero />

		<IllustrationSection
			className={style.meetings_page_section}
			illustration={codeReviewVideo}
			features={[
				{
					title: 'Better code reviews',
					text:
						'Other developers of the team can watch the videos related to a pull request and quickly understand a piece of code.'
				}
			]}
		/>

		<IllustrationSection
			illustration={fasterOnboarding}
			features={[
				{
					title: 'Faster onboarding',
					text:
						'New developers joining the team get access to all the videos related to a repository, giving them an overview of the entire codebase and all the decisions taken throughout the project.'
				}
			]}
			reverse
		/>

		<Section className={style.register_section}>
			<H className={style.register_section_title}>Request access now.</H>

			<Container>
				<RegisterForm className={style.register_form} />
			</Container>
		</Section>
	</div>
);

export default Home;
