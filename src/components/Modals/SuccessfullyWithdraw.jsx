import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Translate from 'react-translate-component';

import ModalsActions from 'actions/ModalsActions';

function mapStateToProps(state) {
	return {
		modal: state.modals.get('modal'),
		open: state.modals.get('open')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		closeModal: () => dispatch(ModalsActions.closeModal()),
		navigateToDashbord: () => dispatch(push('/'))
	};
}

class SuccessfullyWithdraw extends React.Component {
	
	onClick() {
		this.props.closeModal();
		this.props.navigateToDashbord();
	}
	
	render() {
		let {modal, open} = this.props;
		if(!open || modal != 'successfully_withdraw') return null;
		
		return (
			<div className="modal fade in" style={{display: 'block'}} id="modalPassChanged">
				<div className="modal-dialog">
					<div className="modal-dialogAlignOut">
						<div className="modal-dialogAlignIn">
							<div className="modal-dialogContent">
								<span className="modal__close icon-cross" data-dismiss="modal" onClick={this.onClick.bind(this)}/>
								
								<div className="modal__body text_c">
									<h2 className="modal__title"><Translate content="modal.successfully_withdraw"/></h2>
									<div className="modal__btns">
										<button type="button" className="btn btn-sbm" onClick={this.onClick.bind(this)}>
											<span className="loader none"/>
											<span className="btnText"><Translate content="modal.ok"/></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(SuccessfullyWithdraw);
