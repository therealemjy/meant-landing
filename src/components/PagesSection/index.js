import H from '../H';
import P from '../P';

import style from './style';

const meetingsPage = require('../../assets/images/meetings-page.png');
const roomsPage = require('../../assets/images/rooms-page.png');

const PagesSection = () => (
	<div class={style.pagesSection}>
		<div class={style.container}>
			<section class={style.illustration_container}>
				<img
					class={style.illustration}
					src={meetingsPage}
					alt="Clean and simple calendar interface"
				/>
			</section>

			<section class={style.block}>
				<div class={style.feature}>
					<H>Meeting management made easy</H>

					<P>
						Hermes reduces the time spent in planning meetings, manages your meeting rooms
						and boosts your team’s productivity regardless of your company size.
					</P>
				</div>

				<div class={style.feature}>
					<H>Meeting management made easy</H>

					<P>
						Hermes reduces the time spent in planning meetings, manages your meeting rooms
						and boosts your team’s productivity regardless of your company size.
					</P>
				</div>
			</section>
		</div>
	</div>
);

export default PagesSection;
