import React from 'react';

export default class History extends React.Component {

    constructor() {
        super();
        this.state = {
            history: [
                {date: 'Feb 16, 16:39:02', amount: {amount: 10, cur: 'USD'}, rate: {base: {amount: 1, cur: 'USD'},query: {amount: 1, cur: 'BITS'}},address: '1HEc7sdhhshZ9LwuPaEeHTgs1HEc7sdhhshZ9LwuPaEeHTgs'},
                {date: 'Feb 16, 15:32:02', amount: {amount: 0.5, cur: 'BITS'}, rate: {base: {amount: 1, cur: 'BTC'}, query: {amount: 500, cur: 'Tokens'}}, address: 'agjsgo1jakskfhLsdgljasjgklasdagjsgo1jakskfhLsdgljasjgklasd'},
                {date: 'Feb 02, 08:24:38', amount: {amount: 35, cur: 'ETH'}, rate: {base: {amount: 1, cur: 'ETH'}, query: {amount: 12, cur: 'Tokens'}}, address: '1HEc7sdhhshZ9LwuPaEeHTgs1HEc7sdhhshZ9LwuPaEeHTgs'},
                {date: 'Jan 31, 12:58:01', amount: {amount: 0.5, cur: 'BTC'}, rate: {base: {amount: 1, cur: 'USD'}, query: {amount: 1, cur: 'BITS'}}, address: '1HEc7sdhhshZ9LwuPaEeHTgs1HEc7sdsshhshZ9LwuPaEeHTgs'},
                {date: 'Jan 31, 12:58:01', amount: {amount: 0.5, cur: 'BTC'}, rate: {base: {amount: 1, cur: 'USD'}, query: {amount: 1, cur: 'BITS'}}, address: '1HEc7sdhhshZ9LwuPaEeHTgs1kghHEc7sdhhshZ9LwuPaEeHTgs'},
                {date: 'Jan 31, 12:58:01', amount: {amount: 0.5, cur: 'BTC'}, rate: {base: {amount: 1, cur: 'USD'}, query: {amount: 1, cur: 'BITS'}}, address: '1HEc7sdhhshZ9LwuPaEeHTgs1HEc7sdhdfhhshZ9LwuPaEeHTgs'},
                {date: 'Jan 31, 12:58:01', amount: {amount: 0.5, cur: 'BTC'}, rate: {base: {amount: 1, cur: 'USD'}, query: {amount: 1, cur: 'BITS'}}, address: '1HEc7sdhhshZ9LwuffPaEeHTgs1HEc7sdsshhshZ9LwuPaEeHTgs'},
                {date: 'Jan 31, 12:58:01', amount: {amount: 0.5, cur: 'BTC'}, rate: {base: {amount: 1, cur: 'USD'}, query: {amount: 1, cur: 'BITS'}}, address: '1HEc7sdhhshZ9LwusdaPaEeHTgs1kghHEc7sdhhshZ9LwuPaEeHTgs'},
                {date: 'Jan 31, 12:58:01', amount: {amount: 0.5, cur: 'BTC'}, rate: {base: {amount: 1, cur: 'USD'}, query: {amount: 1, cur: 'BITS'}}, address: '1HEc7sdhhsh48Z9LwuPaEeHTgs1HEc7sdhdfhhshZ9LwuPaEeHTgs'}
            ],
            count: 4
        };
    }

    onMoreHistory() {
        let count = this.state.count + 4;
        this.setState({count});
    }

    render() {

        let {history, count} = this.state;

        let table = history.map((item, index) => {
            return (
                <div key={item.date + item.amount.cur + item.address} className={`tr ${index + 1 > count ? 'inactive' : '' }`}>
                    <div className="td td-date">
                        <div className="tdIn">{item.date}</div>
                    </div>
                    <div className="td td-amount">
                        <div className="tdIn">
                            <b>{item.amount.amount}</b> {item.amount.cur}
                        </div>
                    </div>
                    <div className="td td-rate">
                        <div className="tdIn">{item.rate.base.amount} {item.rate.base.cur} = {item.rate.query.amount} {item.rate.query.cur}</div>
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
