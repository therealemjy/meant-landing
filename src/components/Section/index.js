import classNames from 'classnames';

import style from './style';

const Section = ({ children, className }) => (
	<section class={classNames(style.section, className)}>{ children }</section>
);

export default Section;
