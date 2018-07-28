import classNames from 'classnames';

import H from '../H';
import P from '../P';

import style from './style';

const IllustrationSection = ({ illustration, features, className, reverse = false }) => (
	<div class={classNames(style.illustrations_section, className)}>
		<div class={style.container}>
			<section class={classNames(style.illustration_container, { [style.reverse]: !!reverse })}>
				<img
					class={style.illustration}
					src={illustration}
					alt="Clean and simple calendar interface"
				/>
			</section>

			<section class={classNames(style.block, { [style.reverse]: !!reverse })}>
				{features.map(feature => (
					<div class={style.feature}>
						<H type="h3">{ feature.title }</H>

						<P>{ feature.text }</P>
					</div>
				))}
			</section>
		</div>
	</div>
);

export default IllustrationSection;
