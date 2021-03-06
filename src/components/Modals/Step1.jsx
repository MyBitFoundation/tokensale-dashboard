import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

import ModalsActions from 'actions/ModalsActions';


function mapStateToProps(state){
    return {
        modal: state.modals.get('modal'),
        open: state.modals.get('open'),
        currency: state.modals.get('currency'),
        loading: state.modals.get('loading'),
        error: state.modals.get('error')
    };
}

function mapDispatchToProps(dispatch){
    return {
        openModal: (modal) => dispatch(ModalsActions.openModal(modal)),
        closeModal: () => dispatch(ModalsActions.closeModal()),
        generate: (currency) => dispatch(ModalsActions.generate(currency))
    };
}


class Step1 extends React.Component {

    onGenerate(e) {
        e.preventDefault();
        this.props.generate(this.props.currency);
    }

    render() {
        let {modal, open, currency, error} = this.props;
        return (
            <div
                className={`modal fade ${open && modal === 'step1' ? 'in' : ''}`}
                style={{display: open && modal === 'step1' ? 'block' : 'none'}}
                id="modalPayStep1"
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
                                    <h2 className="modal__title"><Translate content="modal.pay_with"/> {currency.toUpperCase()}</h2>

                                    <div className="modal__note">
                                        {!error ? counterpart.translate('modal.generate_address') : counterpart.translate('deposit_unavailable', {currency: currency.toUpperCase()})}
                                    </div>
                                    { !error ?
                                        <div className="modal__btns">
                                            <button className="btn btn-sbm js-btnGenerate" type="button" onClick={this.onGenerate.bind(this)} disabled={this.props.loading}>
                                              {this.props.loading ? <span className="loader"></span> : null}
                                              <span className="btnText"><Translate content="modal.generate"/></span>
                                            </button>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Step1);
