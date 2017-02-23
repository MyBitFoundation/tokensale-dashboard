import React from 'react';

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            current: {name: 'EUR', num: 234.457},
            list: [
                {name: 'EUR', num: 234.457},
                {name: 'USD', num: 803.0516},
                {name: 'CNY', num: 78.97709},
                {name: 'GBP', num: 1.00000},
                {name: 'AUD', num: 1.00000},
                {name: 'CAD', num: 146842.87812},
                {name: 'SGD', num: 78.97709},
                {name: 'INR', num: 1.00000},
                {name: 'RUB', num: 1.00000},
                {name: 'JPY', num: 146842.87812}
            ]
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
        let {open, current, list} = this.state;

        let menuItems = list.map(item => {
            return (
                <li key={item.name} className="ddMenu__li">
                    <a
                        href="javascript:;"
                        className={`ddMenu__item js-sel_dropDown ${current === item ? 'active' : ''}`}
                        onClick={this.onChangeCurrent.bind(this, item)}
                    >{item.name}</a>
                </li>
            );
        })

        return (
            <div className="sidebar__tumbler">
                <div className={`sidebar__select dd ${open ? 'open' : ''}`}>
                    <a href="javascript:;" className="ddTrigger ddArrow" data-toggle="dropdown" onClick={this.onToggleMenu.bind(this)}>
                        <span className="ddTrigger__text">{current.name}</span>
                    </a>
                    <div className="ddMenu">
                        <ul className="ddMenu__list">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="sidebar__num">{current.num}</div>
            </div>
        );
    }
}
