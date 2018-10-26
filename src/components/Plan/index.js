import classNames from 'classnames';

import H from '../H';
import P from '../P';
import Button from '../Button';

import style from './style';

const Plan = ({ className, children, name, price, note, buttonLabel, bottomNote, to }) => (
	<div class={classNames(style.plan, className)}>
		<H className={style.plan_title} type="h3">{ name }</H>
		{ !!price && <H className={style.plan_price}>{ price }</H> }

		{ !!note && <H type="h4" className={style.plan_note}>{ note }</H> }

		<div class={style.content}>{ children }</div>

		{ !!buttonLabel && !!to && <Button className={style.button} label={buttonLabel} to={to} /> }

		{ !!bottomNote && <P className={style.button_note}>{ bottomNote }</P> }
	</div>
);

export default Plan;
