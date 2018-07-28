import classNames from 'classnames';

import Section from '../Section';
import H from '../H';
import P from '../P';

import style from './style';

const TitleSection = ({ title, text, className, lowPaddingBottom = false }) => (
	<Section
		className={classNames(
			style.title_section,
			{ [style.low_padding_bottom]: !!lowPaddingBottom },
			className
		)}
	>
		<H className={style.title}>{ title }</H>
		<P>{ text }</P>
	</Section>
);

export default TitleSection;
