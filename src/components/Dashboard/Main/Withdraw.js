import React from "react";
import {connect} from 'react-redux';
import WithdrawActions from '../../../actions/WithdrawActions';
import ModalsActions from '../../../actions/ModalsActions';
import Translate from 'react-translate-component';
import classNames from "classnames";

function mapStateToProps(state, ownProps) {
	return {
		balanceForWithdraw: state.account.get('balanceForWithdraw'),
		tfa: state.account.get('tfa'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		openModal: (modal) => dispatch(ModalsActions.openSuccessfullyWithdraw()),
		submit: data => dispatch(WithdrawActions.withdraw(data))
	};
}

class Withdraw extends React.Component {
	
	constructor(props) {
		super();
		this.state = {
			loading: false,
			address: "",
			password: "",
			tfaKey: "",
			openModal: false,
			errors: {}
		};
	}
	
	onSubmit(e) {
		e.preventDefault();
		this.setState({loading: true});
		this.props.submit({
			address: this.state.address,
			password: this.state.password,
			tfaKey: this.state.tfaKey
		}).then(() => {
			this.setState({loading: false});
			this.props.openModal();
			
		}).catch(errors => {
			this.setState({loading: false, errors});
		});
	}
	
	render() {
		let {balanceForWithdraw, tfa} = this.props;
		let {loading, address, password, tfaKey, errors} = this.state;
		if(!balanceForWithdraw) return null;
		
		return (
			<div className="withdrawal">
				<div className="title"><Translate content="withdraw.title" /> <b>{balanceForWithdraw}</b> MYB</div>
				<div className="withdrawal__body">
					<form className="form__withdrawal" autoComplete="off" onSubmit={e => this.onSubmit(e)}>
						<div className="withdrawal__col">
							{errors.address ? <div className="error__text">{errors.address[0]}</div> : null}
							<label htmlFor="ethereum_address" className="label text_l"><Translate content="withdraw.you_address" /></label>
							<input className={classNames('field2', {error: errors.address})} id="ethereum_address" type="text" value={address} onChange={e => this.setState({address: e.target.value, errors: {}})} autoComplete="off"/>
						</div>
						<div className="withdrawal__col">
							{errors.password ? <div className="error__text">{errors.password[0]}</div> : null}
							<label htmlFor="password" className="label text_l"><Translate content="withdraw.password" /></label>
							<input className={classNames('field2', {error: errors.password})} id="password" type="password" value={password} onChange={e => this.setState({password: e.target.value, errors: {}})} autoComplete="off"/>
						</div>
						
						<div className="withdrawal__footer">
							{tfa ? (
								<div className="withdrawal__col">
									{errors.tfaKey ? <div className="error__text">{errors.tfaKey[0]}</div> : null}
									<label htmlFor="tfa" className="label text_l"><Translate content="withdraw.tfa_code" /></label>
									<input className={classNames('field2', {error: errors.tfaKey})} id="tfa" type="text" value={tfaKey} onChange={e => this.setState({tfaKey: e.target.value, errors: {}})}/>
								</div>
							) : null}
							
							<div className="withdrawal__col">
								<button className="btn btn-formSbm">
									{loading ? <span className="loader"/> : <Translate content="withdraw.title" />}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);