import React from 'react';
import { connect } from 'react-redux';

import {disableTFA} from 'actions/TFAActions';

function mapStateToProps(state, ownProps){
    return {

    };
}

function mapDispatchToProps(dispatch){
    return {
        disableTFA: (token, password) => dispatch(disableTFA(token, password))

    };
}

class Disable extends React.Component {
    constructor() {
        super();
        this.state = {
            token: '',
            tokenError: null,
            password: '',
            passwordError: null,
            error: null
        }
    }

    onChangeInput(type, e) {
        this.setState({[type]: e.target.value});
    }

    onDisable() {
        let {token, password} = this.state;
        if(!token || token.length < 6)
            return this.setState({tokenError: '6-Digit Key is required and must contain 6 characters'});
        if(!password || password.length < 6)
            return this.setState({passwordError: 'Password is required and must contain at least 6 characters'})

        this.props.disableTFA(token, password).catch(error => {
            this.setState({error: 'Invalid password or 6-Digit Key'});
        })
    }

    render() {
        let {error, token, password, tokenError, passwordError} = this.state;

        return (
            <section className="content content-2fa">
          		<div className="box">
          			<h1 className="h1 ">Two-Factor Authentication</h1>
          			<div className="descr ">We use Google Authenticator for 2FA.</div>
          			<div className="main">
          				<div className="main__col one">
          					<div className="title">
          						You have Two-Factor Authentication enabled
          					</div>
          					<div className="form__title">
          						Disable 2FA
          					</div>
          					<div className="row ">
                                {tokenError || error ? <div className="error__text">{tokenError || error}</div> : null}
          						<label htmlFor="key01" className="label text_l">6-Digit_Key</label>
          						<input
                                    className={`field2 ${tokenError || error ? 'error' : ''}`}
                                    id="key01"
                                    type="text"
                                    placeholder="Enter code to disable"
                                    value={token}
                                    onChange={this.onChangeInput.bind(this, 'token')}/>
          					</div>
          					<div className="row ">
          						{passwordError || error? <div className="error__text">{passwordError || error}</div> : null}
          						<label htmlFor="key02" className="label text_l">Password</label>
          						<input
                                    className={`field2 ${passwordError || error ? 'error' : ''}`}
                                    id="key02"
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={this.onChangeInput.bind(this, 'password')}/>
          					</div>
          					<div className="attn">
          						<b className="mark5">Warning: </b>
          						<i className="">
          							Disabling 2FA will make your account less secure.
          						</i>
          					</div>
          					<div className="form__btns">
          						<button className="btn btn-formSbm" type="button" onClick={this.onDisable.bind(this)}>Disable 2FA</button>
          					</div>
          				</div>
          			</div>
          		</div>
          	</section>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Disable);
