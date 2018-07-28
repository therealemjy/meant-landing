import classNames from 'classnames';

import H from '../H';
import P from '../P';

import style from './style';

const TitleSection = ({ title, text, className }) => (
	<div class={classNames(style.title_section, className)}>
		<H className={style.title}>{ title }</H>
		<P>{ text }</P>
	</div>
);

export default TitleSection;
