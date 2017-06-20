import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';

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
        this.setState({[type]: e.target.value, [`${type}Error`]: null});
    }

    onDisable() {
        let {token, password} = this.state;

        this.props.disableTFA(token, password).catch(err => {
            const error = err.response.message;
            if(/password/i.test(error)) {
                return this.setState({passwordError: 'Invalid password'});
            } else if(/token/i.test(error)) {
                return this.setState({tokenError: 'Invalid 6-Digit Key'});
            } else {
                this.setState({error: 'Undefined error.'});
            }
        })
    }

    render() {
        let {error, token, password, tokenError, passwordError} = this.state;

        return (
            <section className="content content-2fa">
          		<div className="box">
          			<h1 className="h1 "><Translate content="tfa.header"/></h1>
          			<div className="descr "><Translate content="tfa.description"/></div>
          			<div className="main">
          				<div className="main__col one">
          					<div className="title">
          						<Translate content="tfa.disable.title"/>
          					</div>
          					<div className="form__title">
          						<Translate content="tfa.disable.disable_tfa"/>
          					</div>
          					<div className="row ">
                                {tokenError || error ? <div className="error__text">{tokenError || error}</div> : null}
          						<label htmlFor="key01" className="label text_l"><Translate content="tfa.disable.6_digit_key"/></label>
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
          						<b className="mark5"><Translate content="tfa.disable.warning_title"/> </b>
          						<i className="">
                                    <Translate content="tfa.disable.warning"/>
          						</i>
          					</div>
          					<div className="form__btns">
          						<button className="btn btn-formSbm" type="button" onClick={this.onDisable.bind(this)}><Translate content="tfa.disable.disable_tfa"/></button>
          					</div>
          				</div>
          			</div>
          		</div>
          	</section>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Disable);
