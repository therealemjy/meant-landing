import classNames from 'classnames';

import Section from '../Section';
import Container from '../Container';
import TitleSection from '../TitleSection';
import style from './style';

const partners = [
	require('../../assets/images/partners-logo/dropbox.svg'),
	require('../../assets/images/partners-logo/mozilla.svg'),
	require('../../assets/images/partners-logo/ticketswap.svg'),
	require('../../assets/images/partners-logo/co.svg'),
	require('../../assets/images/partners-logo/sol.svg')
];

const PartnersSection = ({ className }) => (
	<Section className={classNames(style.partners, className)}>
		<TitleSection className={style.title} title="Trusted by" noPaddingTop />

		<Container className={style.container}>
			<div className={style.partners_logo}>
				<img className={style.partner_logo} src={partners[0]} alt="Dropbox logo" />
				<img className={style.partner_logo} src={partners[1]} alt="Mozilla logo" />
				<img className={style.partner_logo} src={partners[2]} alt="Ticketswap logo" />
				<img className={style.partner_logo} src={partners[3]} alt="Cocoon logo" />
				<img className={style.partner_logo} src={partners[4]} alt="Solvoltaics logo" />
			</div>
		</Container>
	</Section>
);

export default PartnersSection;
