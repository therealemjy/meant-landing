import { Component } from 'preact';
import classNames from 'classnames';

import style from './style';

class TimeFinder extends Component {
	state = {
		step: 0,
		hasBeenAnimated: true,
	};

	startAnimation = () => {
		this.setState({
			step: 1,
			hasBeenAnimated: false,
		});

		setTimeout(() => this.setState({ step: 2 }), 2500);
		setTimeout(() => this.setState({ step: 3 }), 3100);
		setTimeout(() => this.setState({ step: 4 }), 4600);
	};

	onScroll = () => {
		const threshold = 250;
		const top = this.timefinder.getBoundingClientRect().top;

		if (this.state.hasBeenAnimated && top <= window.innerHeight - threshold) {
			this.startAnimation();
		}
	};

	componentDidMount = () => window.addEventListener('scroll', this.onScroll, false);
	componentWillUnmount = () => window.removeEventListener('scroll', this.onScroll, false);

	render = () => {
		const step = this.state.step;
		const times = step < 3 ? ['10:30', '13:30', '14:30'] : ['13:30', '14:30', '16:30'];

		return (
			<div
				class={classNames(style.time_finder, { [style.visible]: step > 0 }, this.props.className)}
				ref={timefinder => this.timefinder = timefinder}
			>
				<div class={style.left_container}>
					<label class={style.label}>Time finder</label>

					<div class={classNames(style.left, {
						[style.warning]: step < 3,
						[style.success]: step === 4,
					})}>
						{step !== 3 && (
							<svg class={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24px" height="24px" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
							</svg>
						)}

						{step < 3 && <div class={style.text_unavailable}>
							<p class={style.text}><span class={style.underlined}>Marc</span> and <span class={style.underlined}>Eva</span> are not available for this date and time.</p>
						</div>}

						{step === 3 && <div class={style.loader_container}>
							<div class={style.loader} />
							<span class={style.loader_text}>Loading...</span>
						</div>}

						{step === 4 && <div class={style.text_unavailable}>
							<p class={style.text}>Everyone is available for this date and time.</p>
						</div>}
					</div>
				</div>

				<div class={style.right_container}>
					<label class={style.label}>Alternative times</label>

					<div class={style.right}>
						{ step === 3 && <div class={style.loader} /> }
						{ step !== 3 && times.map((time, index) => (
							<span class={
								classNames(style.time, {
									[style.clickable]: index === 0,
									[style.clicked]: step === 2,
								})}
							>{ time }</span>)
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default TimeFinder;
