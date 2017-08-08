import React from 'react';
import {connect} from 'react-redux';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

import {changePassword} from 'actions/SettingsActions';
import {initialize} from 'actions/GlobalActions';
import {load} from 'actions/DashboardActions';

function validate(password) {
	if(!password.value || password.value.length < 6) {
		password.error = true;
	} else {
		password.error = false;
	}
	return password;
}

function mapStateToProps(state, ownProps) {
	return {
		address: state.account.get('address')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		changePassword: (params) => dispatch(changePassword(params)),
		loadData: () => dispatch(load())
	};
}

class Settings extends React.Component {
	constructor(props) {
		super();
		this.state = {
			oldPassword: {value: '', error: false},
			newPassword: {value: '', error: false},
			newPasswordCopy: {value: '', error: false},
			address: {value: props.address, error: false},
			error: ''
		}
	}

	onChangeInput(type, e) {
		this.setState({[type]: {value: e.target.value, error: false}})
	}

	onChangePassword() {
		let {oldPassword, newPassword, newPasswordCopy, address} = this.state;
		oldPassword = validate(oldPassword);
		address = validate(address);
		newPassword = validate(newPassword);
		newPasswordCopy = validate(newPasswordCopy);

		if(oldPassword.error || newPassword.error || newPasswordCopy.error) {
			this.setState({
				oldPassword,
				newPassword,
				newPasswordCopy,
				error: "Password is required and must contain at least 6 characters"
			});
			return;
		}

		this.props.changePassword({
			password_old: oldPassword.value,
			password_new: newPassword.value,
			password_retype: newPasswordCopy.value,
			address: address.value
		}).then(data => {
			this.setState({
				oldPassword: {value: '', error: false},
				newPassword: {value: '', error: false},
				newPasswordCopy: {value: '', error: false},
				address: {value: '', error: false},
				error: ''
			})

			this.props.loadData();
		}).catch(err => {
			const error = err.response.message;
			if(/new password/i.test(error)) {
				newPassword.error = true;
				newPasswordCopy.error = true;
				return this.setState({newPassword, newPasswordCopy, error});
			} else if(/password/i.test(error)) {
				oldPassword.error = true;
				return this.setState({oldPassword, error});
			} else if(/address/i.test(error)) {
				address.error = true;
				return this.setState({address, error});
			}
		})
	}

	render() {
		let {oldPassword, newPassword, newPasswordCopy, address, error} = this.state;

		return (
			<section className="content content-pass">
				<div className="box">
					<h1 className="h1 "><Translate content="settings.header"/></h1>
					<div className="main">
						<div className="main__col one">
							<div className="row ">
								{error && oldPassword.error ? <div className="error__text">{error}</div> : null}
								<label htmlFor="key01" className="label text_l"><Translate content="settings.old_password"/></label>
								<input
									className={`field2 ${error && oldPassword.error ? 'error' : ''}`}
									id="key01"
									type="password"
									placeholder={counterpart.translate("settings.old_password")}
									value={oldPassword.value}
									onChange={this.onChangeInput.bind(this, 'oldPassword')}/>
							</div>
							<div className="row ">
								{error && newPassword.error ? <div className="error__text">{error}</div> : null}
								<label htmlFor="key02" className="label text_l"><Translate content="settings.new_password"/></label>
								<input
									className={`field2 ${error && newPassword.error ? 'error' : ''}`}
									id="key02"
									type="password"
									placeholder={counterpart.translate("settings.new_password")}
									value={newPassword.value}
									onChange={this.onChangeInput.bind(this, 'newPassword')}/>
							</div>
							<div className="row ">
								{error && newPasswordCopy.error ? <div className="error__text">{error}</div> : null}
								<label htmlFor="key03" className="label text_l"><Translate content="settings.new_password_confirmation"/></label>
								<input
									className={`field2 ${error && newPasswordCopy.error ? 'error' : ''}`}
									id="key03"
									type="password"
									placeholder={counterpart.translate("settings.new_password_confirmation")}
									value={newPasswordCopy.value}
									onChange={this.onChangeInput.bind(this, 'newPasswordCopy')}/>
							</div>
							<div className="row ">
								{error && address.error ? <div className="error__text">{error}</div> : null}
								<label htmlFor="key03" className="label text_l"><Translate content="settings.change_wallet_address"/></label>
								<input
									className={`field2 ${error && address.error ? 'error' : ''}`}
									id="key03"
									type="text"
									placeholder="ETH Wallet address"
									value={address.value}
									onChange={this.onChangeInput.bind(this, 'address')}/>
							</div>
							<div className="form__btns text_c">
								<button className="btn btn-formSbm" type="button" onClick={this.onChangePassword.bind(this)}>
									<Translate content="settings.change"/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
