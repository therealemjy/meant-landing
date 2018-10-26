import classNames from 'classnames';

import Section from '../Section';
import Container from '../Container';
import TitleSection from '../TitleSection';
import P from '../P';

import style from './style';

const Testimonials = ({ className, testimonials }) => (
	<Section className={classNames(style.plans_section, className)}>
		<TitleSection title="Our users love us" />

		<Container className={style.container}>
			{testimonials.map(({ text, author, jobTitle }) => (
				<div className={style.testimonial}>
					<P className={style.testimonial_text}>“{text}”</P>
					<span className={style.testimonial_author}>
						<strong>{author}</strong>, {jobTitle}
					</span>
				</div>
			))}
		</Container>
	</Section>
);

export default Testimonials;
