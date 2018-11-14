import classNames from 'classnames';

import Section from '../Section';
import H from '../H';
import P from '../P';

import style from './style';

const TitleSection = ({ title, text, className, noPaddingBottom = false, noPaddingTop = false }) => (
	<Section
		className={classNames(
			style.title_section,
			{ [style.no_padding_bottom]: !!noPaddingBottom },
			{ [style.no_padding_top]: !!noPaddingTop },
			className
		)}
	>
		<div class={style.content}>
			<H className={style.title}>{ title }</H>
			{ !!text && <P>{ text }</P> }
		</div>
	</Section>
);

export default TitleSection;
