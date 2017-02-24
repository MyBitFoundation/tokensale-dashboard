import React from 'react';
import { connect } from 'react-redux';

import Disable from './Disable';
import Enable from './Enable';

function mapStateToProps(state, ownProps){
    return {
        tfa: state.account.get('tfa')
    };
}

function mapDispatchToProps(dispatch){
    return {};
}

class FA extends React.Component {
    constructor() {
        super();
    }


    render() {
        let {tfa} = this.props;

        return tfa ? <Disable /> : <Enable />
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FA);
