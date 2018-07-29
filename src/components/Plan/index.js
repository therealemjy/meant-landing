import classNames from 'classnames';

import H from '../H';
import P from '../P';
import Button from '../Button';

import style from './style';

const Plan = ({ className, children, name, price, buttonLabel, bottomNote, onClick }) => (
	<div class={classNames(style.plan, className)}>
		<H className={style.plan_title} type="h3">{ name }</H>
		{ !!price && <H className={style.plan_price}>{ price }</H> }

		<div class={style.content}>{ children }</div>

		{ !!buttonLabel && !!onClick && <Button className={style.button} label={buttonLabel} onClick={onClick} /> }

		{ !!bottomNote && <P className={style.button_note}>{ bottomNote }</P> }
	</div>
);

export default Plan;
