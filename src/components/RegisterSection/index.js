import classNames from 'classnames';

import Section from '../Section';
import Container from '../Container';
import TitleSection from '../TitleSection';
import RegisterForm from '../RegisterForm';

import style from './style';

const RegisterSection = ({ className }) => (
	<Section className={classNames(style.register_section, className)}>
		<TitleSection className={style.title_section} title="Timowl makes teams more efficient" />

		<Container>
			<RegisterForm />
		</Container>
	</Section>
);

export default RegisterSection;
