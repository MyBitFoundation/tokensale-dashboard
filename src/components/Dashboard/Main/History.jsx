import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state, ownProps){
    return {
        history: state.dashboard.get('history')
    };
}

function mapDispatchToProps(dispatch){
    return {};
}


class History extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 4
        };
    }

    onMoreHistory() {
        let count = this.state.count + 4;
        this.setState({count});
    }

    render() {

        let {count} = this.state;
        let {history} = this.props;

        let presicion = 10;
        let options = {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
        };
        

        let table = history.map((item, index) => {
            return (
                <div key={item.transactionId} className={`tr ${index + 1 > count ? 'inactive' : '' }`}>
                    <div className="td td-date">
                        <div className="tdIn">{new Date(item.date).toLocaleString("en-US", options)}</div>
                    </div>
                    <div className="td td-amount">
                        <div className="tdIn">
                            <b>{item.sentAmount}</b> {item.sentCoinType}
                        </div>
                    </div>
                    <div className="td td-rate">
                        <div className="tdIn">1 token = {Math.floor(item.rate * presicion) / presicion} {item.sentCoinType}</div>
                    </div>
                    <div className="td td-address">
                        <div className="tdIn">{item.address}</div>
                    </div>
                </div>
            );
        })

        return (
            <div className="history">
                <div className="title">Transactions History</div>
                <div className="history__table">
                    <div className="history__tableHead">
                        <div className="tr">
                            <div className="td td-date">
                                <a href="javascript:;" className="sort">
                                    Date <span className="sortIcon icon-arrow_dropdown"></span>
                                </a>
                            </div>
                            <div className="td td-amount">
                                <a href="javascript:;" className="sort">
                                    Amount <span className="sortIcon icon-arrow_dropdown"></span>
                                </a>
                            </div>
                            <div className="td td-rate">
                                <a href="javascript:;" className="sort">
                                    Exchange Rate <span className="sortIcon icon-arrow_dropdown"></span>
                                </a>
                            </div>
                            <div className="td td-address">
                                <a href="javascript:;" className="sort">
                                    Address <span className="sortIcon icon-arrow_dropdown"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="history__tableBody">
                        {table}
                    </div>
                    <div className={`history__tableBtns ${history.length <= count ? 'inactive' : ''}`}>
                        <button type="button" className="btn btn-more js-btnMore" onClick={this.onMoreHistory.bind(this)}>
                            <span className="btnText">More</span>
                            <span className="btnIcon icon-arrow"></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(History);
