import classNames from 'classnames';

import style from './style';

const Button = ({ className, label, onClick, skeleton = false, big = false }) => (
	<button
		class={classNames(style.button, className, {
			[style.skeleton]: !!skeleton,
			[style.big]: !!big
		})}
		onClick={onClick}
	>
		{ label }
	</button>
);

export default Button;
