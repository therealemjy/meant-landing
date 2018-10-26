import classNames from 'classnames';

import style from './style';

const H = ({ children, type = 'h2', className }) => {
	const classes = classNames(style[type], className);
	const Tag = `${type}`;

	return <Tag class={classes}>{ children }</Tag>;
};
	

export default H;
