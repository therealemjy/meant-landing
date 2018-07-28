import classNames from 'classnames';

import style from './style';

const P = ({ children, className }) => (
	<p class={classNames(style.p, className)}>{ children }</p>
);

export default P;
