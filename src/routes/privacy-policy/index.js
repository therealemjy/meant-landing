import Section from '../../components/Section';
import Container from '../../components/Container';
import H from '../../components/H';
import P from '../../components/P';
import Ul from '../../components/Ul';
import Li from '../../components/Li';

import style from './style';

const PrivacyPolicy = () => (
	<Section>
		<Container className={style.container}>
			<H className={style.title}>Privacy Policy</H>

			<P>
				Your privacy is very important to us. Accordingly, we have developed this Policy in order for you
				to understand how we collect, use, communicate and disclose and make use of personal information.
				The following outlines our privacy policy.
			</P>

			<P>User data is safely stored in Europe. The Timowl core infrastructure is hosted in London, United Kingdom.</P>

			<H type="h3">Respect of Privacy</H>
			
			<P>Timowl.com takes user privacy seriously.</P>

			<Ul>
				<Li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</Li>
				<Li>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</Li>
				<Li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</Li>
				<Li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</Li>
				<Li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</Li>
				<Li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</Li>
				<Li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</Li>
			</Ul>

			<P>
				We are committed to conducting our business in accordance with these principles in order to ensure
				that the confidentiality of personal information is protected and maintained.
			</P>
		</Container>
	</Section>
);

export default PrivacyPolicy;
