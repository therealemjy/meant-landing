import classNames from 'classnames';

import style from './style';

const Button = ({ className, label, onClick, to, skeleton = false }) => {
	const classes = classNames(style.button, className, {
		[style.skeleton]: !!skeleton
	});

	if (to) {
		return <a class={classes} href={to}>{ label }</a>;
	}

	return <button class={classes} onClick={onClick}>{ label }</button>;
};

export default Button;
