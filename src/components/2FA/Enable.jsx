import React from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';
import twoFactor from 'node-2fa';


import {enableTFA} from 'actions/TFAActions';

function mapStateToProps(state, ownProps){
    return {
        email: state.account.get('email'),
        tfaSecret: state.tfa.get('secret'),
        url: state.tfa.get('url')
    };
}

function mapDispatchToProps(dispatch){
    return {
        enableTFA: (secret, password) => dispatch(enableTFA(secret, password))
    };
}

class Enable extends React.Component {
    constructor() {
        super();
        this.state = {
            privateKey: '',
            privateKeyError: '',
            password: '',
            passwordError: '',
            checkbox: false,
            error: ''
        }
    }

    onChangeInput(type, e) {
        this.setState({[type]: e.target.value, [`${type}Error`]: ''});
    }

    onToggleCheckbox() {
        let checkbox = !this.state.checkbox;
        this.setState({checkbox});
    }

    onEnable() {
        let {privateKey, password, checkbox} = this.state;

        if(!privateKey || privateKey.length < 6)
            return this.setState({privateKeyError: "6-Digit Key is required and must contain 6 characters"});
        if(!password || password.length < 6)
            return this.setState({passwordError: "Password is required and must contain at least 6 characters"});
        if(!checkbox)
            return this.setState({error: "Confirmation is required"});

        let check = twoFactor.verifyToken(this.props.tfaSecret, privateKey);
        if(!check)
            return this.setState({privateKeyError: "Invalid 6-Digit Key"});

        this.props.enableTFA(this.props.tfaSecret, password).catch(error => {
            this.setState({passwordError: "Invalid password"});
        });
    }

    render() {
        let {error, privateKey, password, checkbox, privateKeyError, passwordError} = this.state;
        let {tfaSecret, url} = this.props;
        return (
            <section className="content content-2fa">
        		<div className="box">
        			<h1 className="h1 ">Two-Factor Authentication</h1>
        			<div className="descr ">For extra account security, you can turn on two-factor authentication <b>(2FA)</b>.</div>
        			<div className="main">
        				<div className="main__col left">
        					<div className="title">
        						We use Google Authenticator for 2FA.
        					</div>
        					<p>
        						In order to use 2FA, scan QR code into the Google Authenticator app on your phone, or enter the 16-digit key and appears under the QR code.
        					</p>
        					<p>
        						Input the six-digit code provided by the Google Authenticator app and your account password elow, then click “Enable 2FA”.
        					</p>
        					<div className="qr">
                                <QRCode value={url || ''}  size={280} level={'Q'}/>
        						<div className="qr__text">QR-Code</div>
        					</div>
        				</div>
        				<div className="main__col right">
        					<div className="form__title">
        						Enable 2FA
        					</div>
        					<div className="row ">
        						<label htmlFor="key01" className="label text_l">16-Digit_Key</label>
        						<input className="field2" id="key01" type="text" value={tfaSecret} readOnly/>
        					</div>
        					<div className="attn">
        						<b className="mark5">Important: </b>
        						<i className="">
        							Before turning on 2FA, write down the 16-digit key and put keep it in a safe place. If your phone gets lost, stolen, or erased, you will need this key to get back into your account!
        						</i>
        					</div>
        					<div className="row ">
        						{passwordError ? <div className="error__text">{passwordError}</div> : null}
        						<label htmlFor="key02" className="label text_l">Password</label>
        						<input
                                    className={`field2 ${passwordError ? 'error' : null}`}
                                    id="key02"
                                    type="password"
                                    value={password}
                                    onChange={this.onChangeInput.bind(this, 'password')}/>
        					</div>
        					<div className="row ">
                                {privateKeyError ? <div className="error__text">{privateKeyError}</div> : null}
        						<label htmlFor="key03" className="label text_l">6-Digit Key</label>
        						<input
                                    className={`field2 ${privateKeyError ? 'error' : null}`}
                                    id="key03"
                                    type="text"
                                    value={privateKey}
                                    onChange={this.onChangeInput.bind(this, 'privateKey')}/>
        					</div>
        					<div className="row">
                                {error ? <div className="error__text">{error}</div> : null}
        						<label className="customCheck__label">
                                    <span className="customCheck__labelRelative">
                                        <input type="checkbox" className="customCheck__check" value={checkbox} onChange={this.onToggleCheckbox.bind(this)}/>
                                        <span className="customCheck__checkPseudo"></span>
                                    </span>
        							<span className="customCheck__labelPseudo">I have backed up my 16-digit key</span>
        						</label>
        					</div>
        					<div className="form__btns">
        						<button className="btn btn-formSbm" type="button" onClick={this.onEnable.bind(this)}>Enable 2FA</button>
        					</div>
        				</div>
        			</div>
        		</div>
        	</section>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Enable);
