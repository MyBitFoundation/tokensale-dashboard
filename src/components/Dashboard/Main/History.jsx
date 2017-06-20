import React from 'react';
import {connect} from 'react-redux';
import moment from "moment";
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

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
			sortLTH: false
		};
	}

	onMoreHistory() {
		let count = this.state.count + 4;
		this.setState({count});
	}

	onSort(type) {
		this.props.sortBy(type);
		let sortLTH = !this.state.sortLTH;
		this.setState({sortLTH});
	}

	getHistoryTable() {
		let {history, sort} = this.props;
		let {count, sortLTH} = this.state;

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
					return a.date > b.date ? (sortLTH ? 1 : -1) : (sortLTH ? -1 : 1);
				case 'amount':
					return a.sentAmount > b.sentAmount ? (sortLTH ? 1 : -1) : (sortLTH ? -1 : 1);
				case 'rate':
					return a.tokenPrice > b.tokenPrice ? (sortLTH ? 1 : -1) : (sortLTH ? -1 : 1);
				case 'purchase':
					return a.tokenPrice > b.tokenPrice ? (sortLTH ? 1 : -1) : (sortLTH ? -1 : 1);
				case 'address':
					return a.address > b.address ? (sortLTH ? 1 : -1) : (sortLTH ? -1 : 1);
				default:
					return a.date > b.date ? (sortLTH ? 1 : -1) : (sortLTH ? -1 : 1);
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
					<div className="td td-purchased">
						<div className="tdIn">{item.receivedAmount} MyB</div>
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
								className={`sort ${sort === 'date' && sortLTH ? 'active' : ''}`}
								onClick={this.onSort.bind(this, 'date')}>
								<Translate content="dashboard.main.history.date"/> <span className="sortIcon icon-arrow_dropdown"/>
							</a>
						</div>
						<div className="td td-amount">
							<a
								href="javascript:;"
								className={`sort ${sort === 'amount' && sortLTH ? 'active' : ''}`}
								onClick={this.onSort.bind(this, 'amount')}>
								<Translate content="dashboard.main.history.amount"/> <span className="sortIcon icon-arrow_dropdown"/>
							</a>
						</div>
						<div className="td td-rate">
							<a
								href="javascript:;"
								className={`sort ${sort === 'rate' && sortLTH ? 'active' : ''}`}
								onClick={this.onSort.bind(this, 'rate')}>
								<Translate content="dashboard.main.history.exchange_rate"/> <span className="sortIcon icon-arrow_dropdown"/>
							</a>
						</div>
						<div className="td td-purchased">
							<a
								href="javascript:;"
								className={`sort ${sort === 'purchase' && sortLTH ? 'active' : ''}`}
								onClick={this.onSort.bind(this, 'purchase')}>
								MyB <Translate content="dashboard.main.history.purchased"/> <span className="sortIcon icon-arrow_dropdown"/>
							</a>
						</div>
						<div className="td td-address">
							<a
								href="javascript:;"
								className={`sort ${sort === 'address' && sortLTH ? 'active' : ''}`}
								onClick={this.onSort.bind(this, 'address')}>
								<Translate content="dashboard.main.history.address"/> <span className="sortIcon icon-arrow_dropdown"/>
							</a>
						</div>
					</div>
				</div>
				<div className="history__tableBody">
					{table}
				</div>
				<div className={`history__tableBtns ${history.length <= count ? 'inactive' : ''}`}>
					<button type="button" className="btn btn-more js-btnMore" onClick={this.onMoreHistory.bind(this)}>
						<span className="btnText"><Translate content="dashboard.main.history.more"/></span>
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

					{history.length ? counterpart.translate('dashboard.main.history.transactions_history') : counterpart.translate('dashboard.main.history.no_recent_transactions')}
				</div>

				{history.length ? this.getHistoryTable() : null}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
