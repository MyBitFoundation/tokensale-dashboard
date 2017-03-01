import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import {changeCurrency} from 'actions/DashboardActions';

function mapStateToProps(state, ownProps){
    return {
        rates: state.dashboard.get('rates')['fiat'],
        currency: state.dashboard.get('currency')
    };
}

function mapDispatchToProps(dispatch){
    return {
        changeCurrency: (name) => dispatch(changeCurrency(name))
    };
}


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    onToggleMenu() {
        let open = !this.state.open;
        this.setState({open});
    }

    onChangeCurrent(item) {
        this.props.changeCurrency(item);
        this.setState({open: false});
    }

    componentDidMount () {
        document.getElementById('root').addEventListener('click', this.handleDocumentClick.bind(this))
    }

    componentWillUnmount () {
        document.getElementById('root').removeEventListener('click', this.handleDocumentClick.bind(this))
    }

    handleDocumentClick (e) {
        const menu = ReactDOM.findDOMNode(this.refs.sideMenu);
        if(!menu) return;

        if (!menu.contains(e.target)) {
          this.setState({open: false})
        }
    }

    render() {
        let {open} = this.state;

        let {rates, currency} = this.props;

        let menuItems = [];
        for(let name in rates) {
            menuItems.push(
                <li key={name} className="ddMenu__li">
                    <a
                        href="javascript:;"
                        className={`ddMenu__item js-sel_dropDown ${currency === name ? 'active' : ''}`}
                        onClick={this.onChangeCurrent.bind(this, name)}
                    >{name}</a>
                </li>
            )
        }

        return (
            <div className="sidebar__tumbler" ref="sideMenu">
                <div className={`sidebar__select dd ${open ? 'open' : ''}`}>
                    <a href="javascript:;" className="ddTrigger ddArrow" data-toggle="dropdown" onClick={this.onToggleMenu.bind(this)}>
                        <span className="ddTrigger__text">{currency}</span>
                    </a>
                    <div className="ddMenu">
                        <ul className="ddMenu__list">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="sidebar__num">{rates[currency]}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
