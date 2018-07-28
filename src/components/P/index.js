import classNames from 'classnames';

import style from './style';

const P = ({ children, className, small = false }) => (
	<p class={classNames(style.p, { [style.small]: !!small }, className)}>{ children }</p>
);

export default P;
