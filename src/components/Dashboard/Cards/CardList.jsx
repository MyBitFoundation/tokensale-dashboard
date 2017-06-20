import React from 'react';
import {connect} from 'react-redux';
import Translate from 'react-translate-component';

function mapStateToProps(state, ownProps) {
	return {
		balance: state.account.get('balance'),
		amountRaised: state.account.get('amountRaised'),
		amountRaisedEUR: state.account.get('amountRaisedEUR'),
		tokenPrice: state.account.get('tokenPrice'),
		precision: state.account.get('precision'),
		endTime: state.account.get('endTime'),
		deadline: state.account.get('deadline'),
		presaleDeadline: state.account.get('presaleDeadline')
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

class CardList extends React.Component {
	constructor() {
		super();
		this.state = {
			daysLeft: 0,
			hoursLeft: 0,
			timer: null
		};
		this.interval = 0;
	}

	componentWillMount() {
		this.interval = setInterval(() => this.calculateLeftTime(), 60 * 1000);
		this.calculateLeftTime()
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	calculateLeftTime() {
		let {deadline, presaleDeadline} = this.props;

		let endTime = null;
		if(presaleDeadline - Date.now() / 1000 > 0) {
			endTime = presaleDeadline * 1000;
		} else if(deadline - Date.now() / 1000 > 0) {
			endTime = deadline * 1000;
		}

		if(endTime) {
			let ss = (new Date(endTime).getTime() - Date.now()) / 1000;
			let days = Math.floor(ss / (60 * 60 * 24));
			ss -= (60 * 60 * 24) * days;

			let hours = Math.floor(ss / (60 * 60));
			ss -= (60 * 60) * hours;
			let minutes = Math.floor(ss / 60);

			if(days < 0) days = 0;
			if(hours < 0) hours = 0;
			if(minutes < 0) minutes = 0;
			this.setState({
				timer: {
					daysLeft: days,
					hoursLeft: hours,
					minutesLeft: minutes
				}
			});
		} else {
			this.setState({
				timer: null
			});
		}
	}

	render() {
		let {tokenPrice, balance, precision, amountRaised, amountRaisedEUR} = this.props;
		let {timer} = this.state;

		return (
			<div className="card__list items-3">
				{/*<div className="card">*/}
				{/*<div className="cardIn">*/}
				{/*<div className="card__total">*/}
				{/*<div className="card__totalTitle">Total Amount Raised</div>*/}
				{/*<div className="card__totalRow">*/}
				{/*<b className="card__totalNum">{parseFloat(amountRaised).toFixed(2)} </b>*/}
				{/*<span className="card__totalCur">ETH</span>*/}
				{/*</div>*/}
				{/*<div className="card__totalRow">*/}
				{/*<b className="card__totalNum">{parseFloat(amountRaisedEUR).toFixed(2)} </b>*/}
				{/*<span className="card__totalCur">EUR</span>*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
				<div className="card">
					<div className="cardIn">
						<div className="card__pic bg1">
							<img src="images/arrows@2x.png" alt="" height="26"/>
						</div>
						<div className="card__info">
							<div className="card__infoData">
								<div className="colspan">
									<b className="mark1">1 </b>
									<span>ETH</span>
								</div>
								<span className="equal">=</span>
								<div className="colspan">
									<b className="mark1">{parseFloat(this.props.tokenPrice).toFixed(2)} </b>
									<span>MyB</span>
								</div>
							</div>
							<div className="card__infoLabel"><Translate content="dashboard.main.cards.crowdsale_price"/></div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="cardIn">
						<div className="card__pic bg2">
							<img src="images/clock@2x.png" alt="" height="32"/>
						</div>
						{timer ? (
							<div className="card__info">
								<div className="card__infoData" style={{fontSize: "0.8rem"}}>
									<div className="colspan">
										<b className="mark2">{timer.daysLeft} </b>
										<span className="pr-10"><Translate content="dashboard.main.cards.days"/></span>
									</div>
									<div className="colspan">
										<b className="mark3">{timer.hoursLeft} </b>
										<span><Translate content="dashboard.main.cards.hours"/></span>
									</div>
									<div className="colspan">
										<b className="mark3">{timer.minutesLeft} </b>
										<span><Translate content="dashboard.main.cards.minutes"/></span>
									</div>
								</div>
								<div className="card__infoLabel"><Translate content="dashboard.main.cards.time_left"/></div>
							</div>
						) : (
							<div className="card__info">
								<div className="card__infoData" style={{fontSize: "0.8rem"}}>
									<div className="colspan">
										<b className=""><Translate content="dashboard.main.cards.crowdsale_over"/></b>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="card">
					<div className="cardIn">
						<div className="card__pic">
							<img src="images/logo@2x.png" alt="" height="62"/>
						</div>
						<div className="card__info">
							<div className="card__infoData">
								<b className="mark4">{(parseInt(balance * precision) / precision).toFixed(precision.toFixed().length - 1)}</b>
							</div>
							<div className="card__infoLabel">MyB <Translate content="dashboard.main.cards.balance"/></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
