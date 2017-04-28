import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
	return {
		balance: state.account.get('balance'),
		amountRaised: state.account.get('amountRaised'),
		amountRaisedEUR: state.account.get('amountRaisedEUR'),
		tokenPrice: state.account.get('tokenPrice'),
		precision: state.account.get('precision'),
		endTime: state.account.get('endTime')
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
			hoursLeft: 0
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
		let {endTime} = this.props;
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
			daysLeft: days,
			hoursLeft: hours,
			minutesLeft: minutes
		});
	}

	render() {
		let {tokenPrice, balance, precision, amountRaised, amountRaisedEUR} = this.props;

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
							<div className="card__infoLabel">Crowdsale Price</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="cardIn">
						<div className="card__pic bg2">
							<img src="images/clock@2x.png" alt="" height="32"/>
						</div>
						<div className="card__info">
							<div className="card__infoData" style={{fontSize: "0.8rem"}}>
								<div className="colspan">
									<b className="mark2">{this.state.daysLeft} </b>
									<span className="pr-10">Days</span>
								</div>
								<div className="colspan">
									<b className="mark3">{this.state.hoursLeft} </b>
									<span>Hours</span>
								</div>
								<div className="colspan">
									<b className="mark3">{this.state.minutesLeft} </b>
									<span>Minutes</span>
								</div>
							</div>
							<div className="card__infoLabel">Time Left</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="cardIn">
						<div className="card__pic">
							<img src="images/logo@2x.png" alt="" height="62"/>
						</div>
						<div className="card__info">
							<div className="card__infoData">
								<b className="mark4">{(parseInt(balance  * precision) / precision).toFixed(precision.toFixed().length - 1)}</b>
							</div>
							<div className="card__infoLabel">MyB Balance</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
