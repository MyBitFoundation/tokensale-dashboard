import React from 'react';

import Menu from './Menu';

export default class Sidebar extends React.Component {
    render() {
        let currencies = [
            {name: 'btc', num: 1.00000},
            {name: 'etc', num: 803.0516},
            {name: 'eth', num: 78.97709},
            {name: 'xmr', num: 1.00000},
            {name: 'dash', num: 1.00000},
            {name: 'rep', num: 146842.87812}
        ];

        let rows = currencies.map(cur => {
            return (
                <div key={cur.name + cur.num} className="sidebar__row">
                    <div className="sidebar__cur">
                        <span className="cur__icon">
                            <img src={`images/${cur.name}_sm.png`} alt=""/>
                        </span>
                        <span className="cur__name">{cur.name}</span>
                    </div>
                    <div className="sidebar__num">{cur.num}</div>
                </div>
            );
        })

        return (
            <div className="sidebar">
                <div className="title">Exchange Rates</div>
                <Menu />
                <div className="sidebar__body">
                    {rows}
                </div>
            </div>
        );
    }
}
