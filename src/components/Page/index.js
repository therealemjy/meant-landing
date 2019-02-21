import classNames from 'classnames';

import BackgroundTiles from '../../components/BackgroundTiles';

import style from './style';

const Page = ({ children, className }) => (
	<div class={classNames(style.container, className)}>
		<BackgroundTiles />

		{ children }
	</div>
);

export default Page;
