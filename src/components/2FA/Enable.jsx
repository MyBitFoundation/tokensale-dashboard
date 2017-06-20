import React from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';
import twoFactor from 'node-2fa';
import Translate from 'react-translate-component';


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
        this.setState({checkbox, error: ''});
    }

    onEnable() {
        let {privateKey, password, checkbox} = this.state;

        if(!checkbox)
            return this.setState({error: "Confirmation is required"});

        let check = twoFactor.verifyToken(this.props.tfaSecret, privateKey);
        if(!check)
            return this.setState({privateKeyError: "Invalid 6-Digit Key"});

        this.props.enableTFA(this.props.tfaSecret, password).catch(err => {
            const error = err.response.message;
            if(/password/i.test(error)) {
                return this.setState({passwordError: error});
            }
        });
    }

    render() {
        let {error, privateKey, password, checkbox, privateKeyError, passwordError} = this.state;
        let {tfaSecret, url} = this.props;
        return (
            <section className="content content-2fa">
        		<div className="box">
        			<h1 className="h1 "><Translate content="tfa.header"/></h1>
        			<div className="descr "><Translate content="tfa.enable.description"/> <b>(2FA)</b>.</div>
        			<div className="main">
        				<div className="main__col left">
        					<div className="title">
        						<Translate content="tfa.description"/>
        					</div>
        					<p>
        						<Translate content="tfa.enable.qrcode"/>
        					</p>
        					<p>
        						<Translate content="tfa.enable.key"/>
        					</p>
        					<div className="qr">
                                <QRCode value={url || ''}  size={280} level={'Q'}/>
        						<div className="qr__text">QR-Code</div>
        					</div>
        				</div>
        				<div className="main__col right">
        					<div className="form__title">
        						<Translate content="tfa.enable.enable_tfa"/>
        					</div>
        					<div className="row ">
        						<label htmlFor="key01" className="label text_l"><Translate content="tfa.enable.16_digit_key"/></label>
        						<input className="field2" id="key01" type="text" value={tfaSecret} readOnly/>
        					</div>
        					<div className="attn">
        						<b className="mark5"><Translate content="tfa.enable.attention_title"/></b>
        						<i className="">
        							<Translate content="tfa.enable.attention"/>
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
        						<label htmlFor="key03" className="label text_l"><Translate content="tfa.disable.6_digit_key"/></label>
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
        							<span className="customCheck__labelPseudo"><Translate content="tfa.enable.check"/></span>
        						</label>
        					</div>
        					<div className="form__btns">
        						<button className="btn btn-formSbm" type="button" onClick={this.onEnable.bind(this)}><Translate content="tfa.enable.enable_tfa"/></button>
        					</div>
        				</div>
        			</div>
        		</div>
        	</section>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Enable);
