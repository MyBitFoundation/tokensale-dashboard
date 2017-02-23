import React from 'react';

class FA extends React.Component {
    render() {
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
        						<img src="images/qrcode_lg.png" alt="" />
        						<div className="qr__text">QR-Code</div>
        					</div>
        				</div>
        				<div className="main__col right">
        					<div className="form__title">
        						Enable 2FA
        					</div>
        					<div className="row ">
        						<label htmlFor="key01" className="label text_l">16-Digit_Key</label>
        						<input className="field2" id="key01" type="text" value="rf7j 5oxo eogm gj46" disabled/>
        					</div>
        					<div className="attn">
        						<b className="mark5">Important:</b>
        						<i className="">
        							Before turning on 2FA, write down the 16-digit key and put keep it in a safe place. If your phone gets lost, stolen, or erased, you will need this key to get back into your account!
        						</i>
        					</div>
        					<div className="row ">
        						<div className="error__text">Error txt</div>
        						<label htmlFor="key02" className="label text_l">Password</label>
        						<input className="field2 error" id="key02" type="password" value="test"/>
        					</div>
        					<div className="row ">
        						<label htmlFor="key03" className="label text_l">6-Digit Key</label>
        						<input className="field2" id="key03" type="text"/>
        					</div>
        					<div className="row">
        						<label className="customCheck__label">
                                    <span className="customCheck__labelRelative">
                                        <input type="checkbox" className="customCheck__check" />
                                        <span className="customCheck__checkPseudo"></span>
                                    </span>
        							<span className="customCheck__labelPseudo">I have backed up my 16-digit key</span>
        						</label>
        					</div>
        					<div className="form__btns">
        						<button className="btn btn-formSbm">Enable 2FA</button>
        					</div>
        				</div>
        			</div>
        		</div>
        	</section>
        );
    }
}

export default FA;
