import React from "react";
import {connect} from 'react-redux';
import copy from 'copy-to-clipboard';

function mapStateToProps(state, ownProps) {
	return {
		contractAddress: state.account.get('contractAddress')
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

class PresaleAddress extends React.Component {

	constructor() {
		super();
		this.state = {
			copied: false
		};
	}

	copy() {
		copy(this.props.contractAddress);
		this.setState({copied: true});
	}

	render() {
		let {contractAddress} = this.props;
		let {copied} = this.state;

		return (
			<div className="address">
				<div className="address__title">
					<span className="cur__icon">
						<img src="images/eth.png" alt=""  />
					</span>
					<span className="cur__text">ETH Address:</span>
				</div>
				<button className={`address__btn ${copied ? 'active' : ''}`} type="button" onClick={() => this.copy()}>
					<span className="btnText">{copied ? 'Copied' : 'Copy Address'} </span>
					{copied ? <span className="btnIcon icon-check" /> : null}
				</button>
				<div className="address__fieldWrap">
					<input type="text" readOnly className="address__field" value={contractAddress} />
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PresaleAddress);
