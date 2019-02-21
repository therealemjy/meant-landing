import classNames from 'classnames';

import style from './style';

const tag = require('./images/tag.svg');
const brackets = require('./images/brackets.svg');
const equal = require('./images/equal.svg');
const noop = require('./images/noop.svg');
const notEqual = require('./images/notEqual.svg');
const parentheses = require('./images/parentheses.svg');
const semiColumn = require('./images/semiColumn.svg');

const BackgroundTiles = () => (
	<div className={style.container}>
		<img src={semiColumn} className={classNames(style.tile, style.tile1)} />
		<img src={brackets} className={classNames(style.tile, style.tile2)} />
		<img src={tag} className={classNames(style.tile, style.tile3)} />
		<img src={noop} className={classNames(style.tile, style.tile4)} />
		<img src={notEqual} className={classNames(style.tile, style.tile5)} />
		<img src={parentheses} className={classNames(style.tile, style.tile6)} />
		<img src={semiColumn} className={classNames(style.tile, style.tile7)} />

		<img src={brackets} className={classNames(style.tile, style.tile8)} />
		<img src={tag} className={classNames(style.tile, style.tile9)} />
		<img src={noop} className={classNames(style.tile, style.tile10)} />
		<img src={equal} className={classNames(style.tile, style.tile11)} />
	</div>
);

export default BackgroundTiles;
