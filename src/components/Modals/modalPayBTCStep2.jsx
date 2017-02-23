import React from 'react';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';

import ModalsActions from 'actions/ModalsActions';

function mapStateToProps(state){
    return {
        modal: state.modals.modal,
        open: state.modals.open
    };
}

function mapDispatchToProps(dispatch){
    return {
        openModal: (modal) => dispatch(ModalsActions.openModal(modal)),
        closeModal: () => dispatch(ModalsActions.closeModal())
    };
}


class Modal extends React.Component {

    constructor() {
        super();
        this.state = {
            key: 'LQtDHshgskllgdklsgjgklldgjkldlsfjkjjud3HsF6'
        }
    }

    onCopy() {
        copy(this.state.key);
    }

    render() {
        let {modal, open} = this.props;

        return (
            <div
                className={`modal fade ${open && modal === 'modalPayBTCStep2' ? 'in' : ''}`}
                style={{display: open && modal === 'modalPayBTCStep2' ? 'block' : 'none'}}
                id="modalPayBTCStep2"
            >
                <div className="modal-dialog">
                    <div className="modal-dialogAlignOut">
                        <div className="modal-dialogAlignIn">
                            <div className="modal-dialogContent">
                                <span className="modal__close icon-cross" data-dismiss="modal" onClick={this.props.closeModal}></span>

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
                                        <input className="field text_c" id="key01" type="text" value={this.state.key} disabled/>
                                    </div>
                                    <div className="modal__btns">
                                        <button type="button" className="btn btn-sbm" onClick={this.onCopy.bind(this)}>Copy Address</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Modal);
