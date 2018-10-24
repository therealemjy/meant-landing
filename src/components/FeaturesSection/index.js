import Section from '../Section';
import Container from '../Container';
import H from '../H';
import P from '../P';

import style from './style';

const FeaturesSection = ({ features, className }) => (
	<Section className={className}>
		<Container className={style.container}>
			{features.map(feature => (
				<div class={style.feature}>
					<img class={style.icon} src={feature.icon} alt="Komete" />
					<H type="h3">{ feature.title }</H>
					<P small>{ feature.text }</P>
				</div>
			))}
		</Container>
	</Section>
);

export default FeaturesSection;
