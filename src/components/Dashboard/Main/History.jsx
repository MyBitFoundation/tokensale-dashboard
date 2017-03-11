import React from 'react';
import {connect} from 'react-redux';
import moment from "moment"

import {sortBy} from 'actions/DashboardActions';

function mapStateToProps(state, ownProps) {
	return {
		history: state.dashboard.get('history'),
		sort: state.dashboard.get('sort')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		sortBy: (criterion) => dispatch(sortBy(criterion))
	};
}

class History extends React.Component {

	constructor() {
		super();
		this.state = {
			count: 4,
			sortHighToLow: true
		};
	}

	onMoreHistory() {
		let count = this.state.count + 4;
		this.setState({count});
	}

	onSort(type) {
		this.props.sortBy(type);
		let sortHighToLow = !this.state.sortHighToLow;
		this.setState({sortHighToLow});
	}

	getHistoryTable() {
		let {history, sort} = this.props;
		let {count, sortHighToLow} = this.state;

		let presicion = 1000000;
		let options = {
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false
		};

		let table = history.sort((a, b) => {
			switch(sort) {
				case 'date':
					return a.date > b.date ? (sortHighToLow ? -1 : 1) : (sortHighToLow ? 1 : -1);
				case 'amount':
					return a.sentAmount > b.sentAmount ? (sortHighToLow ? -1 : 1) : (sortHighToLow ? 1 : -1);
				case 'rate':
					return a.tokenPrice > b.tokenPrice ? (sortHighToLow ? -1 : 1) : (sortHighToLow ? 1 : -1);
				case 'address':
					return a.address > b.address ? (sortHighToLow ? -1 : 1) : (sortHighToLow ? 1 : -1);
				default:
					return a.date > b.date ? (sortHighToLow ? -1 : 1) : (sortHighToLow ? 1 : -1);
			}
		}).map((item, index) => {
			return (
				<div key={item.transactionId} className={`tr ${index + 1 > count ? 'inactive' : '' }`}>
					<div className="td td-date">
						<div className="tdIn">{moment(item.date).format('MMM D, HH:mm:ss')}</div>
					</div>
					<div className="td td-amount">
						<div className="tdIn">
							<b title={item.sentAmount}>{(parseInt(item.sentAmount * presicion) / presicion).toFixed(6)}</b> {item.sentCoinType}
						</div>
					</div>
					<div className="td td-rate">
						<div className="tdIn">1 {item.sentCoinType} = {item.tokenPrice} MyB</div>
					</div>
					<div className="td td-address">
						<div className="tdIn">{item.address}</div>
					</div>
				</div>
			);
		});
		return (
			<div className="history__table">
				<div className="history__tableHead">
					<div className="tr">
						<div className="td td-date">
							<a
								href="javascript:;"
								className={`sort ${sort === 'date' && sortHighToLow ? 'active' : ''}`}
								onClick={this.onSort.bind(this, 'date')}>
								Date <span className="sortIcon icon-arrow_dropdown"/>
							</a>
						</div>
						<div className="td td-amount">
							<a
								href="javascript:;"
								className={`sort ${sort === 'amount' && sortHighToLow ? 'active' : ''}`}
								onClick={this.onSort.bind(this, 'amount')}>
								Amount <span className="sortIcon icon-arrow_dropdown"/>
							</a>
						</div>
						<div className="td td-rate">
							<a
								href="javascript:;"
								className={`sort ${sort === 'rate' && sortHighToLow ? 'active' : ''}`}
								onClick={this.onSort.bind(this, 'rate')}>
								Exchange Rate <span className="sortIcon icon-arrow_dropdown"/>
							</a>
						</div>
						<div className="td td-address">
							<a
								href="javascript:;"
								className={`sort ${sort === 'address' && sortHighToLow ? 'active' : ''}`}
								onClick={this.onSort.bind(this, 'address')}>
								Address <span className="sortIcon icon-arrow_dropdown"/>
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
						<span className="btnIcon icon-arrow"/>
					</button>
				</div>
			</div>
		)
	}

	render() {

		let {history} = this.props;

		return (
			<div className="history">
				<div className="title">

					{history.length ? "Transactions History" : "No recent transactions"}
				</div>

				{history.length ? this.getHistoryTable() : null}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
