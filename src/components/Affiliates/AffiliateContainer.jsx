import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';

import InviteLink from './InviteLink';
import TableReferrer from './TableReferrer';

import { referrals } from 'actions/AffiliatesActions';

function mapStateToProps(state, ownProps) {
    return {
        referrer: state.affiliates.get('referrer'),
    };
}

function mapDispatchToProps(dispatch){
    return {
        referrals: () => dispatch(referrals())
    };
}

class Affiliates extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentWillMount() {
        this.props.referrals().then(() => {
            this.setState({loading: false});
        })
    }

    render() {
        return (
            <section className="content content-referrals">
                <div className="box">

                    <h1 className="h1"><Translate content="header.affiliates"/></h1>

                    <div className="main">
                        <InviteLink />
                        <TableReferrer />
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Affiliates);
