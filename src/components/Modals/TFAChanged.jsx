import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import ModalsActions from 'actions/ModalsActions';


function mapStateToProps(state){
    return {
        modal: state.modals.get('modal'),
        open: state.modals.get('open'),
        tfa: state.account.get('tfa')
    };
}

function mapDispatchToProps(dispatch){
    return {
        closeModal: () => dispatch(ModalsActions.closeModal()),
        navigateToDashbord: () => dispatch(push('/'))
    };
}

class TFAChanged extends React.Component {

    onClick() {
        this.props.closeModal();
        this.props.navigateToDashbord();
    }

    render() {
        let {modal, open, tfa} = this.props;

        return (
            <div
                className={`modal fade ${open && modal === 'tfaChanged' ? 'in' : ''}`}
                style={{display: open && modal === 'tfaChanged' ? 'block' : 'none'}}
                id="modalTFAChanged"
            >
            	<div className="modal-dialog">
            		<div className="modal-dialogAlignOut">
            			<div className="modal-dialogAlignIn">
            				<div className="modal-dialogContent">
            					<span className="modal__close icon-cross" data-dismiss="modal" onClick={this.onClick.bind(this)}></span>

            					<div className="modal__body text_c">
            						<h2 className="modal__title">{`Two-Factor Authentication has been ${tfa ? 'enabled' : 'disabled'}`}</h2>
            						<div className="modal__btns">
            							<button type="button" className="btn btn-sbm" onClick={this.onClick.bind(this)}>
            								<span className="loader none"></span>
            								<span className="btnText">Ok</span>
            							</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(TFAChanged);
