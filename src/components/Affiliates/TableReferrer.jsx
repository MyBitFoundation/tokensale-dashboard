import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';

function mapStateToProps(state, ownProps) {
    return {
        referrer: state.affiliates.get('referrer'),
        count: 4
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

class TableReferrer extends React.Component {

    constructor() {
        super();
    }

    onMore() {
        let count = this.state.count + 4;
        this.setState({count});
    }

    onSort() {

    }

    getReferrerTable() {
        let {referrer} = this.props;

        let table = referrer.map((item, index) => {
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
                             <span className="sort">
                                 Email
                             </span>
                         </div>
                         <div className="td td-address">
                              <span className="sort">
                                 ETH Address
                                </span>
                         </div>
                         <div className="td td-amount">
                            <span className="sort">
                                 Amount In ETH Contributed
                            </span>
                         </div>
                     </div>
                 </div>
                 <div className="ref__tableBody">
                     {table}
                 </div>
                 <div className="ref__tableBtns">
                     {/*<button className="btn btn-more ">*/}
                         {/*<span className="btnText">More</span>*/}
                         {/*<span className="btnIcon icon-arrow"></span>*/}
                     {/*</button>*/}
                 </div>
             </div>
         );
    }

    render() {
        let {referrer} = this.props;
        {referrer.length ? this.getReferrerTable() : null}

        return (
            <div className="ref">
                <div className="title">Affileates</div>
                {referrer.length ? this.getReferrerTable() : null}
            </div>
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TableReferrer);