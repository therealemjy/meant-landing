import classNames from 'classnames';

import style from './style';

const Li = ({ children, className }) => (
	<li class={classNames(style.li, className)}>{ children }</li>
);

export default Li;
