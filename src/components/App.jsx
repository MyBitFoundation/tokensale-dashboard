import React from 'react';
import { connect } from 'react-redux';

import Step1 from './Modals/Step1';
import Step2 from './Modals/Step2';
import SuccessfullyWithdraw from './Modals/SuccessfullyWithdraw';
import PasswordChanged from './Modals/PasswordChanged';
import TFAChanged from './Modals/TFAChanged';

import Header from './Layout/Header';
import Footer from './Layout/Footer';


function mapStateToProps(state, ownProps){
    return {
        openModal: state.modals.get('open')
    };
}

function mapDispatchToProps(dispatch){
    return {};
}

class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        let {children} = this.props;
        return (
            <div className="out">
                <Step1 />
                <Step2 />
                <SuccessfullyWithdraw />
                <PasswordChanged />
                <TFAChanged />
                <div className="wrapper wrapper-with-footer">
                    <Header />
                    {children}
            	</div>
                <Footer />
                {this.props.openModal ? <div className="modal-backdrop fade in" /> : null}
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
