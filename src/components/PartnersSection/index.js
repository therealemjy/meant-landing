import classNames from 'classnames';

import Section from '../Section';
import Container from '../Container';
import TitleSection from '../TitleSection';
import style from './style';

const partners = [
	require('../../assets/images/partners-logo/airbnb.svg'),
	require('../../assets/images/partners-logo/dropbox.svg'),
	require('../../assets/images/partners-logo/mozilla.svg'),
	require('../../assets/images/partners-logo/spotify.svg'),
	require('../../assets/images/partners-logo/ticketswap.svg')
];

const PartnersSection = ({ className }) => (
	<Section className={classNames(style.partners, className)}>
		<TitleSection className={style.title} title="Trusted by" />

		<Container className={style.container}>
			<div className={style.partners_logo}>
				{
					partners.map(partnerLogoPath => <img className={style.partner_logo} src={partnerLogoPath} alt="partner logo" />)
				}
			</div>
		</Container>
	</Section>
);

export default PartnersSection;
