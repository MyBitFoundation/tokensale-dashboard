import React from 'react';
import { connect } from 'react-redux';

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

    onGenerate() {
        this.props.openModal('modalPayBTCStep2');
    }

    render() {
        let {modal, open} = this.props;
        return (
            <div
                className={`modal fade ${open && modal === 'modalPayBTCStep1' ? 'in' : ''}`}
                style={{display: open && modal === 'modalPayBTCStep1' ? 'block' : 'none'}}
                id="modalPayBTCStep1"
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
                                    <div className="modal__note">Please Generate Wallet Address</div>
                                    <div className="modal__btns">
                                        <button
                                            className="btn btn-sbm js-btnGenerate"
                                            data-dismiss="modal"
                                            data-toggle="modal"
                                            data-target="#modalPayBTCStep2"
                                            type="button"
                                            onClick={this.onGenerate.bind(this)}
                                        >Generate</button>
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
