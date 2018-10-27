import classNames from 'classnames';

import style from './style';

const Button = ({ className, content, onClick, to, skeleton = false }) => {
	const classes = classNames(style.button, className, {
		[style.skeleton]: !!skeleton
	});

	if (to) {
		return <a class={classes} href={to}>{ content }</a>;
	}

	return <button class={classes} onClick={onClick}>{ content }</button>;
};

export default Button;
