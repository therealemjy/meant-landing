import classNames from 'classnames';

import style from './style';

const H = ({ children, type = 'h2', className }) => {
	const classes = classNames(style[type], className);

	if (type === 'h1') {
		return <h1 class={classes}>{ children }</h1>;
	}

	if (type === 'h3') {
		return <h3 class={classes}>{ children }</h3>;
	}

	return <h2 class={classes}>{ children }</h2>;
};
	

export default H;
