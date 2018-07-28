import classNames from 'classnames';

import Container from '../Container';
import H from '../H';
import P from '../P';

import style from './style';

const FeaturesSection = ({ features, className }) => (
	<div class={classNames(style.features_section, className)}>
		<Container>
			{features.map(feature => (
				<section class={style.feature}>
					<H type="h3">{ feature.title }</H>
					<P>{ feature.text }</P>
				</section>
			))}
		</Container>
	</div>
);

export default FeaturesSection;
