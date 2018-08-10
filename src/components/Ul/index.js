import classNames from 'classnames';

import style from './style';

const Ul = ({ children, className }) => (
	<ul class={classNames(style.ul, className)}>{ children }</ul>
);

export default Ul;
