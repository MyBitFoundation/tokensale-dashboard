import React from 'react';
import { Modal } from 'react-modal-bootstrap';
import { connect } from 'react-redux';

import ModalsActions from 'actions/ModalsActions';


function mapStateToProps(state){
    return {
        modal: state.modals.get('modal'),
        open: state.modals.get('open')
    };
}

function mapDispatchToProps(dispatch){
    return {
        closeModal: () => dispatch(ModalsActions.closeModal())
    };
}

class PasswordChanged extends React.Component {


    render() {
        let {modal, open} = this.props;

        return (
            <div
                className={`modal fade ${open && modal === 'passwordChanged' ? 'in' : ''}`}
                style={{display: open && modal === 'passwordChanged' ? 'block' : 'none'}}
                id="modalPassChanged"
            >
            	<div className="modal-dialog">
            		<div className="modal-dialogAlignOut">
            			<div className="modal-dialogAlignIn">
            				<div className="modal-dialogContent">
            					<span className="modal__close icon-cross" data-dismiss="modal" onClick={this.props.closeModal}></span>

            					<div className="modal__body text_c">
            						<h2 className="modal__title">Password was changed</h2>
            						<div className="modal__btns">
            							<button type="button" className="btn btn-sbm" onClick={this.props.closeModal}>
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

export default connect(mapStateToProps,mapDispatchToProps)(PasswordChanged);
