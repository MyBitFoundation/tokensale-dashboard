import React from 'react';
import { connect } from 'react-redux';

import {changePassword} from 'actions/SettingsActions';

function validate(password) {
    if(!password.value || password.value.length < 6) {
        password.error = true;
    } else {
        password.error = false;
    }
    return password;
}

function mapStateToProps(state, ownProps){
    return {};
}

function mapDispatchToProps(dispatch){
    return {
        changePassword: (params) => dispatch(changePassword(params))
    };
}

class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            oldPassword: {value: '', error: false},
            newPassword: {value: '', error: false},
            newPasswordCopy: {value: '', error: false},
            error: ''
        }
    }

    onChangeInput(type, e) {
        this.setState({[type]: {value: e.target.value, error: false}})
    }

    onChangePassword() {
        let {oldPassword, newPassword, newPasswordCopy} = this.state;

        if(validate(oldPassword).error || validate(newPassword).error || validate(newPasswordCopy).error) {
            this.setState({
                oldPassword,
                newPassword,
                newPasswordCopy,
                error: "Password is required and must contain at least 6 characters"
            });
            return;
        }

        if(newPassword.value != newPasswordCopy.value) {
            newPasswordCopy.error = true;
            this.setState({
                newPasswordCopy,
                error: "New password does not match retyped password"
            });
            return;
        }

        this.props.changePassword({
            password_old: oldPassword.value,
            password_new: newPassword.value,
            password_retype: newPasswordCopy.value
        }).then(data => {
            this.setState({
                oldPassword: {value: '', error: false},
                newPassword: {value: '', error: false},
                newPasswordCopy: {value: '', error: false},
                error: ''
            })
        }).catch(error => {
            oldPassword.error = true;
            this.setState({
                oldPassword,
                error: "Invalid password"
            });
            return;
        })
    }

    render() {
        let {oldPassword, newPassword, newPasswordCopy, error} = this.state;

        return (
            <section className="content content-pass">
        		<div className="box">
        			<h1 className="h1 ">Change Password</h1>
        			<div className="main">
        				<div className="main__col one">
        					<div className="row ">
                                {error && oldPassword.error ? <div className="error__text">{error}</div> : null}
        						<label htmlFor="key01" className="label text_l">Old Password</label>
        						<input
                                    className={`field2 ${error && oldPassword.error ? 'error' : ''}`}
                                    id="key01"
                                    type="password"
                                    placeholder="Old Password"
                                    value={oldPassword.value}
                                    onChange={this.onChangeInput.bind(this, 'oldPassword')}/>
        					</div>
        					<div className="row ">
                                {error && newPassword.error ? <div className="error__text">{error}</div> : null}
        						<label htmlFor="key02" className="label text_l">New Password</label>
        						<input
                                    className={`field2 ${error && newPassword.error ? 'error' : ''}`}
                                    id="key02"
                                    type="password"
                                    placeholder="New Password"
                                    value={newPassword.value}
                                    onChange={this.onChangeInput.bind(this, 'newPassword')}/>
        					</div>
        					<div className="row ">
                                {error && newPasswordCopy.error ? <div className="error__text">{error}</div> : null}
        						<label htmlFor="key03" className="label text_l">New Password Confirmation</label>
        						<input
                                    className={`field2 ${error && newPasswordCopy.error ? 'error' : ''}`}
                                    id="key03"
                                    type="password"
                                    placeholder="Repeat New Password"
                                    value={newPasswordCopy.value}
                                    onChange={this.onChangeInput.bind(this, 'newPasswordCopy')}/>
        					</div>
        					<div className="form__btns text_c">
        						<button className="btn btn-formSbm" type="button" onClick={this.onChangePassword.bind(this)}>Change</button>
        					</div>
        				</div>
        			</div>
        		</div>
        	</section>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Settings);
