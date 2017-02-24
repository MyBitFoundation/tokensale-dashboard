import React from 'react';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';
import QRCode from 'qrcode.react';

import ModalsActions from 'actions/ModalsActions';

function mapStateToProps(state){
    return {
        modal: state.modals.get('modal'),
        open: state.modals.get('open'),
        currency: state.modals.get('currency'),
        keys: state.modals.get('keys')
    };
}

function mapDispatchToProps(dispatch){
    return {
        closeModal: () => dispatch(ModalsActions.closeModal())
    };
}

class Modal extends React.Component {

    constructor() {
        super();
    }

    onCopyAddress() {
        copy(this.props.keys.address);
    }

    onCopyId() {
        copy(this.props.keys.paymentId);
    }

    render() {
        let {modal, open, currency, keys} = this.props;

        return (
            <div
                className={`modal fade ${open && modal === 'step2' ? 'in' : ''}`}
                style={{display: open && modal === 'step2' ? 'block' : 'none'}}
                id="modalPayStep2"
            >
                <div className="modal-dialog">
                    <div className="modal-dialogAlignOut">
                        <div className="modal-dialogAlignIn">
                            <div className="modal-dialogContent">
                                <span className="modal__close icon-cross" data-dismiss="modal" onClick={this.props.closeModal}></span>

                                <div className="modal__body text_c">
                                    <div className="modal__curPic">
                                        <img src={currency ? `images/${currency.toLowerCase()}_lg.png` : ''} alt=""/>
                                    </div>
                                    <h2 className="modal__title">Pay with {currency.toUpperCase()}</h2>
                                    <div className="modal__note">
                                        Scan QR-code on your phone <br/>
                                        in order to make a payment.
                                    </div>
                                    <div className="qr">
                                        <QRCode value={keys.address || ''} />
                                    </div>
                                    <div className="row ">
                                        <label htmlFor="key01" className="label text_l">Address</label>
                                        <input className="field text_c" id="key01" type="text" value={keys.address || ''} readOnly/>
                                    </div>
                                    {keys.paymentId ?
                                        <div className="row row-next">
                                            <label htmlFor="key03" className="label text_l">Payment ID</label>
                                            <input className="field text_c" id="key03" type="text" value={keys.paymentId || ''} readOnly/>
                                        </div> : null
                                    }
                                    <div className="modal__btns">
                                        <button type="button" className="btn btn-sbm" onClick={this.onCopyAddress.bind(this)}>Copy Address</button>
                                        {keys.paymentId ?
                                            <button className="btn btn-sbm w250" type="button" onClick={this.onCopyId.bind(this)}>Copy Payment Id</button> : null
                                        }
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
