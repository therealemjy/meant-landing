import classNames from 'classnames';

import style from './style';

const Button = ({ className, label, onClick, skeleton = false }) => (
	<button
		class={classNames(style.button, className, {
			[style.skeleton]: !!skeleton
		})}
		onClick={onClick}
	>
		{ label }
	</button>
);

export default Button;
