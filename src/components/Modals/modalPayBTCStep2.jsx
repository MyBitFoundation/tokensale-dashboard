import React from 'react';

export default class Modal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modalPayBTCStep2">
                <div className="modal-dialog">
                    <div className="modal-dialogAlignOut">
                        <div className="modal-dialogAlignIn">
                            <div className="modal-dialogContent">
                                <span className="modal__close icon-cross" data-dismiss="modal"></span>

                                <div className="modal__body text_c">
                                    <div className="modal__curPic">
                                        <img src="images/btc_lg.png" alt=""/>
                                    </div>
                                    <h2 className="modal__title">Pay with BTC</h2>
                                    <div className="modal__note">
                                        Scan QR-code on your phone <br/>
                                        in order to make a payment.
                                    </div>
                                    <div className="qr">
                                        <img src="images/qrcode.png" alt=""/>
                                    </div>
                                    <div className="row ">
                                        <label htmlFor="key01" className="label text_l">16-Digit_Key</label>
                                        <input className="field text_c" id="key01" type="text" value="LQtDHshgskllgdklsgjgklldgjkldlsfjkjjud3HsF6" disabled/>
                                    </div>
                                    <div className="modal__btns">
                                        <button className="btn btn-sbm">Copy Address</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
