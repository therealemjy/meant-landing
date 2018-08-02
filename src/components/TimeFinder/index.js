import { Component } from 'preact';
import classNames from 'classnames';

import style from './style';

class TimeFinder extends Component {
	state = {
		step: 0,
	};

	render = () => {
		const times = this.state.step === 0 ? ['10:30', '13:30', '14:30'] : ['13:30', '14:30', '16:30'];

		return (
			<div class={classNames(style.time_finder, this.props.className)}>
				<div class={style.left_container}>
					<label class={style.label}>Time finder</label>

					<div class={style.left}>
						{ this.state.step === 0 && <div class={style.text_unavailable}>
							<svg class={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24px" height="24px" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
							</svg>
							<p class={style.unavailable_users}><span class={style.underlined}>Marc</span> and <span class={style.underlined}>Eva</span> are not available for this date and time.</p>
						</div> }

						{this.state.step === 1 && (
							<div class={style.loader_container}>
								<div class={style.loader} />
								<span class={style.loader_text}>Loading...</span>
							</div>
						)}
					</div>
				</div>

				<div class={style.right_container}>
					<label class={style.label}>Alternative times</label>

					<div class={style.right}>
						{ this.state.step === 1 && <div class={style.loader} /> }
						{ this.state.step !== 1 && times.map(time => <span class={style.time}>{ time }</span>) }
					</div>
				</div>
			</div>
		);
	}
}

export default TimeFinder;
