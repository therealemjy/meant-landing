import classNames from 'classnames';

import style from './style';

const Link = ({ children, className, href, target = '_self' }) => (
	<a class={classNames(style.link, className)} href={href} target={target}>{ children }</a>
);

export default Link;
