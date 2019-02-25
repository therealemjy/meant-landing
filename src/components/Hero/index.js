import Container from '../Container';
import RegisterForm from '../RegisterForm';
import H from '../H';
import P from '../P';

import style from './style';

const illustration = require('../../assets/images/integration-record-video.svg');

const Hero = ({ companyName, companyLogo }) => (
	<div class={style.hero}>
		<Container>
			<section class={style.block}>
				<H className={style.title} type="h1">
					The next programming best practice { companyName && `at ${companyName}` }
				</H>

				<P className={style.paragraph}>
					Easily record and attach explanatory videos to your pull requests. Quickly give an overview of what your code does without getting bogged down in details.
				</P>

				<RegisterForm className={style.register_form} />
			</section>

			<section class={style.illustration_container}>
				<img
					class={style.illustration}
					src={illustration}
					alt="Easily record and attach explanatory videos to your GitHub repository"
				/>
				{
					companyLogo && (
						<img
							class={style.illustration_logo}
							src={companyLogo}
							alt={`${companyName}'s logo`}
						/>
					)
				}

			</section>
		</Container>
	</div>
);

export default Hero;
