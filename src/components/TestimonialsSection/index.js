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
			{testimonials.map(({ text, name, photo, jobTitle }) => (
				<div className={style.testimonial}>
					<P className={style.testimonial_text}>“{text}”</P>

					<div className={style.testimonial_author}>
						<div className={style.testimonial_author_left}>
							<img className={style.testimonial_photo} src={photo} alt={`${name}, ${jobTitle}`} />
						</div>

						<div className={style.testimonial_author_right}>
							<div className={style.testimonial_name}>{name}</div>
							<div className={style.testimonial_job_title}>{jobTitle}</div>
						</div>
					</div>
				</div>
			))}
		</Container>
	</Section>
);

export default Testimonials;
