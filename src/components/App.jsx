import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state, ownProps){
    return {
    };
}

function mapDispatchToProps(dispatch){
    return {};
}

class App extends React.Component {

    render() {
        return (
            <div>hi</div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
