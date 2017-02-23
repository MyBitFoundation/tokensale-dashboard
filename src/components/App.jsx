import React from 'react';
import { connect } from 'react-redux';

import ModalPayBTCStep1 from './Modals/modalPayBTCStep1';
import ModalPayBTCStep2 from './Modals/modalPayBTCStep2';
import ModalPayMoneroStep2 from './Modals/modalPayMoneroStep2';

import Header from './Layout/Header';
import Footer from './Layout/Footer';


function mapStateToProps(state, ownProps){
    return {
    };
}

function mapDispatchToProps(dispatch){
    return {};
}

class App extends React.Component {

    render() {
        let {children} = this.props;
        return (
            <div className="out">
                <ModalPayBTCStep1 />
                <ModalPayBTCStep2 />
                <ModalPayMoneroStep2 />
                <div className="wrapper wrapper-with-footer">
                    <Header />
                    {children}
            	</div>
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
