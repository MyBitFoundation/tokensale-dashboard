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
            address: 'LQtDHshgskllgdklsgjgklldgjkldlsfjkjjud3HsF6',
            id: '45fs67zdtDHshgskllgvdwvb5ldgjkldlsfjkjjud3s7b'
        };
    }

    onCopyAddress() {
        copy(this.state.address);
    }

    onCopyId() {
        copy(this.state.id);
    }

    render() {
        let {modal, open} = this.props;

        return (
            <div
                className={`modal fade ${open && modal === 'modalPayMoneroStep2' ? 'in' : ''}`}
                style={{display: open && modal === 'modalPayMoneroStep2' ? 'block' : 'none'}}
                id="modalPayMoneroStep2"
            >
                <div className="modal-dialog">
                    <div className="modal-dialogAlignOut">
                        <div className="modal-dialogAlignIn">
                            <div className="modal-dialogContent">
                                <span className="modal__close icon-cross" data-dismiss="modal" onClick={this.props.closeModal}></span>

                                <div className="modal__body text_c">
                                    <div className="modal__curPic">
                                        <img src="images/xmr_lg.png" alt=""/>
                                    </div>
                                    <h2 className="modal__title">Pay with Monero</h2>
                                    <div className="modal__note">
                                        Scan QR-code on your phone <br/>
                                        in order to make a payment.
                                    </div>
                                    <div className="qr">
                                        <img src="images/qrcode.png" alt=""/>
                                    </div>
                                    <div className="row ">
                                        <label htmlFor="key02" className="label text_l">16-Digit_Key</label>
                                        <input className="field text_c" id="key02" type="text" value={this.state.address} disabled/>
                                    </div>
                                    <div className="row row-next">
                                        <label htmlFor="key03" className="label text_l">Monero Payment ID</label>
                                        <input className="field text_c" id="key03" type="text" value={this.state.id} disabled/>
                                    </div>
                                    <div className="modal__btns">
                                        <button className="btn btn-sbm" type="button" onClick={this.onCopyAddress.bind(this)}>Copy Address</button>
                                        <button className="btn btn-sbm w250" type="button" onClick={this.onCopyId.bind(this)}>Copy Payment Id</button>
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
