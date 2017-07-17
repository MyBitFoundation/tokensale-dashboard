import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';

import InviteLink from './InviteLink';
import TableReferrer from './TableReferrer';

import AffiliatesActions from 'actions/AffiliatesActions';

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch){
    return {
        referrals: (referrals) => dispatch(AffiliatesActions.referrals())
    };
}

class Affiliates extends React.Component {

    constructor(props) {
        super();

        console.log(props);

        this.state = {
            loading: true
        };
        this.bindData();
    }

    componentWillMount() {}
    componentDidMount() {}

    bindData() {
        //this.props.referrals();


        // this.props.....then(() => {
        //     this.setState({loading: true})
        // })
    }

    render() {
        return (
            <section className="content content-referrals">
                <div className="box">

                    <h1 className="h1"><Translate content="header.affiliates"/></h1>

                    <div className="main">
                        <InviteLink />
                        {/*<TableReferrer />*/}
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Affiliates);
