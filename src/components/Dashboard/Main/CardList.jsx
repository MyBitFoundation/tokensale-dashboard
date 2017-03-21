import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
	return {
		balance: state.account.get('balance'),
		tokenPrice: state.account.get('tokenPrice'),
		precision: state.account.get('precision')
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
		let ms = new Date(__TIME__) - Date.now();
		let dayTimestamp = 24 * 60 * 60 * 1000;
		let days = Math.floor(ms / dayTimestamp);
		let hours = Math.floor(ms / 1000 / 60 / 60) - (days * 24);

		if(days < 0) days = 0;
		if(hours < 0) hours = 0;
		this.setState({
			daysLeft: days,
			hoursLeft: hours
		});
	}

	render() {
		let {tokenPrice, balance, precision} = this.props;

		return (
			<div className="card__list">
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
									<b className="mark1">{this.props.tokenPrice} </b>
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
							<div className="card__infoData">
								<div className="colspan">
									<b className="mark2">{this.state.daysLeft} </b>
									<span className="pr-10">Days</span>
								</div>
								<div className="colspan">
									<b className="mark3">{this.state.hoursLeft} </b>
									<span>Hours</span>
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
								<b className="mark4">{(parseInt(balance  * precision) / precision).toFixed(precision.length - 1)}</b>
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
