import React from 'react';

export default class Modal extends React.Component {
    render() {
        return (
            <div className="modal fade in" id="modalPayBTCStep1">
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
                                    <div className="modal__note">Please Generate Wallet Address</div>
                                    <div className="modal__btns">
                                        <button className="btn btn-sbm js-btnGenerate" data-dismiss="modal" data-toggle="modal" data-target="#modalPayBTCStep2">Generate</button>
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
