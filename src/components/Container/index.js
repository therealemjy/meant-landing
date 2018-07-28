import classNames from 'classnames';

import style from './style';

const Container = ({ children, className }) => (
	<div class={classNames(style.container, className)}>{ children }</div>
);

export default Container;
