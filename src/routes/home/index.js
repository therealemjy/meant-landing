import Page from '../../components/Page';
import Section from '../../components/Section';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import H from '../../components/H';
import RegisterForm from '../../components/RegisterForm';
import IllustrationSection from '../../components/IllustrationSection';

import style from './style';
import { Component } from 'preact';

const codeReviewVideo = require(`../../assets/images/pull-request-review-video.svg`);
const fasterOnboarding = require(`../../assets/images/faster-onboarding.svg`);

class Home extends Component {
	fetchData = async () => {
		let response = await fetch('../../assets/json/data.json');
		let data = await response.json();

		return data;
	}

	constructor(props) {
		super(props);

		this.state = {
			companyName: null,
			companyLogo: null
		};
	}

	async componentDidMount () {
		const { url } = this.props;
		const target = url.replace('/', '').trim();

		if (!target) { return; }

		const data = await this.fetchData();
		const result = data.filter(company => company.url_code === target);

		if (result.length === 1) {
			this.setState({
				companyName: result[0].name,
				companyLogo: result[0].logo
			});
		}
	}

	render() {
		return (
			<Page>
				<Hero {...this.state} />

				<IllustrationSection
					className={style.code_reviews_illustration}
					illustration={codeReviewVideo}
					features={[
						{
							title: 'Better code reviews',
							text:
									'Developers of the team can watch the videos related to a pull request to get the context of a piece of code and quickly understand why and how it was built.'
						}
					]}
					reverse
				/>
		
				<IllustrationSection
					className={style.onboarding_illustration}
					illustration={fasterOnboarding}
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
			</Page>
		);
	}
}

export default Home;
