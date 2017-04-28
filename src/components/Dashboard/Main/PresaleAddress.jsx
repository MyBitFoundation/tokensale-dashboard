import React from "react";
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
	return {
		contractAddress: state.account.get('contractAddress')
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

class PresaleAddress extends React.Component {
	
	render() {
		let {contractAddress} = this.props;
		return (
			<div className="address">
				<div className="address__title">
						<span className="cur__icon">
							<img src="images/eth.png" alt="" />
						</span>
					<span className="cur__text">ETH Address:</span>
				</div>
				<div className="address__text">{contractAddress}</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PresaleAddress);