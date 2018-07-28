import H from '../H';
import P from '../P';

import style from './style';

const IllustrationSection = ({ illustration, features }) => (
	<div class={style.pages_section}>
		<div class={style.container}>
			<section class={style.illustration_container}>
				<img
					class={style.illustration}
					src={illustration}
					alt="Clean and simple calendar interface"
				/>
			</section>

			<section class={style.block}>
				{features.map(feature => (
					<div class={style.feature}>
						<H>{ feature.title }</H>

						<P>{ feature.text }</P>
					</div>
				))}
			</section>
		</div>
	</div>
);

export default IllustrationSection;
