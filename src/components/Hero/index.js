import  { FirebaseContext } from '../Firebase';
import Container from '../Container';
import RegisterForm from '../RegisterForm';
import H from '../H';
import P from '../P';

import style from './style';

const illustration = require('../../assets/images/integration-record-video.svg');

const Hero = () => (
	<div class={style.hero}>
		<Container>
			<section class={style.block}>
				<H className={style.title} type="h1">
					The new programming best practice
				</H>

				<P className={style.paragraph}>
					Easily record and attach explanatory videos to your pull requests. Quickly give an overview of what your code does without getting bogged down in details.
				</P>

				<FirebaseContext.Consumer>
					{firebase => <RegisterForm className={style.register_form} firebase={firebase} />}
				</FirebaseContext.Consumer>
			</section>

			<section class={style.illustration_container}>
				<img
					class={style.illustration}
					src={illustration}
					alt="Meant is your central place for meeting and meeting rooms management"
				/>
			</section>
		</Container>
	</div>
);

export default Hero;
