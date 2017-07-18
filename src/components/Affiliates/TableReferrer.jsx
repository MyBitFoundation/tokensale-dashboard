import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';

import { sortBy } from 'actions/AffiliatesActions';

function mapStateToProps(state, ownProps) {
    return {
        referrer: state.affiliates.get('referrer'),
        sort: state.affiliates.get('sort')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sortBy: (criterion) => dispatch(sortBy(criterion))
    };
}

class TableReferrer extends React.Component {

    constructor() {
        super();
        this.state = {
            sortLTH: false
        }
    }

    onSort(type) {
        this.props.sortBy(type);
        let sortLTH = !this.state.sortLTH;
        this.setState({sortLTH});
    }

    getReferrerTable() {
        let {referrer, sort} = this.props;
        let {sortLTH} = this.state;

        let table = referrer.sort((a, b) => {
            switch (sort) {
                case 'email':
                    return a.email < b.email ? (sortLTH ? 1 : -1) : (sortLTH ? -1 : 1);
                case 'amount':
                    return a.contributeEthAmount < b.contributeEthAmount ? (sortLTH ? 1 : -1) : (sortLTH ? -1 : 1);
                default:
                    return a.email < b.email ? (sortLTH ? 1 : -1) : (sortLTH ? -1 : 1);
            }
        }).map((item, index) => {
            return (
                <div key={index} className="tr">
                    <div className="td td-email">
                        <div className="tdIn">{item.email}</div>
                    </div>
                    <div className="td td-address">
                        <div className="tdIn">{item.address}</div>
                    </div>
                    <div className="td td-amount">
                        <div className="tdIn">
                            <b>{item.contributeEthAmount}</b> <span>ETH</span> <span className="cur__icon"> <img src="images/eth_sm.png" alt="" /></span>
                        </div>
                    </div>
                </div>
            );
        });

         return (
             <div className="ref__table">
                 <div className="ref__tableHead">
                     <div className="tr">
                         <div className="td td-email">
                             <a href="javascript:;"
                                className={`sort ${sort === 'email' && sortLTH ? 'active' : ''}`}
                                onClick={this.onSort.bind(this,'email')}>
                                 <Translate content="affiliates.email"/> <span className="sortIcon icon-arrow_dropdown"></span>
                             </a>
                         </div>
                         <div className="td td-address">
                              <span className="sort">
                                <Translate content="affiliates.eth_address"/>
                              </span>
                         </div>
                         <div className="td td-amount">
                            <a href="javascript:;"
                               className={`sort ${sort == 'amount' && sortLTH ? 'active' : ''}`}
                               onClick={this.onSort.bind(this,'amount')}>
                                <Translate content="affiliates.amount_in_eth_contributed"/> <span className="sortIcon icon-arrow_dropdown"></span>
                            </a>
                         </div>
                     </div>
                 </div>
                 <div className="ref__tableBody">
                     {table}
                 </div>
                 <div className="ref__tableBtns"></div>
             </div>
         );
    }

    render() {
        let {referrer} = this.props;
        {referrer.length ? this.getReferrerTable() : null}

        return (
            <div className="ref">
                <div className="title"><Translate content="header.affiliates"/></div>
                {referrer.length ? this.getReferrerTable() : null}
            </div>
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TableReferrer);