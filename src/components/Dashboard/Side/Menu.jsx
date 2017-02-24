import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state, ownProps){
    return {
        rates: state.dashboard.get('rates')['fiat']
    };
}

function mapDispatchToProps(dispatch){
    return {};
}


class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            current: 'EUR'
        };
    }

    onToggleMenu() {
        let open = !this.state.open;
        this.setState({open});
    }

    onChangeCurrent(item) {
        this.setState({current: item, open: false});
    }

    render() {
        let {open, current} = this.state;

        let {rates} = this.props;

        let menuItems = [];
        for(let name in rates) {
            menuItems.push(
                <li key={name} className="ddMenu__li">
                    <a
                        href="javascript:;"
                        className={`ddMenu__item js-sel_dropDown ${current === name ? 'active' : ''}`}
                        onClick={this.onChangeCurrent.bind(this, name)}
                    >{name}</a>
                </li>
            )
        }

        return (
            <div className="sidebar__tumbler">
                <div className={`sidebar__select dd ${open ? 'open' : ''}`}>
                    <a href="javascript:;" className="ddTrigger ddArrow" data-toggle="dropdown" onClick={this.onToggleMenu.bind(this)}>
                        <span className="ddTrigger__text">{current}</span>
                    </a>
                    <div className="ddMenu">
                        <ul className="ddMenu__list">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="sidebar__num">{rates[current]}</div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
