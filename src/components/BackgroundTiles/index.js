import style from './style';

const cross = require('./cross.svg');

const BackgroundTiles = () => (	
	<div className={style.container}>
		<img src={cross} className={[style.tile, style.tile1]} />
	</div>
);

export default BackgroundTiles;
