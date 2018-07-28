import Section from '../Section';
import Container from '../Container';
import H from '../H';
import P from '../P';

import style from './style';

const FeaturesSection = ({ features, className }) => (
	<Section className={className}>
		<Container>
			{features.map(feature => (
				<section class={style.feature}>
					<H type="h3">{ feature.title }</H>
					<P small>{ feature.text }</P>
				</section>
			))}
		</Container>
	</Section>
);

export default FeaturesSection;
