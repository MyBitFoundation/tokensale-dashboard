import React from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';

function mapStateToProps(state, ownProps){
    return {
        rates: state.dashboard.get('rates')['crypto']
    };
}

function mapDispatchToProps(dispatch){
    return {};
}

class Sidebar extends React.Component {
    render() {

        let {rates} = this.props;

        let rows = [];
        for(let name in rates) {
            rows.push(
                <div key={name} className="sidebar__row">
                    <div className="sidebar__cur">
                        <span className="cur__icon">
                            <img src={`images/${name.toLowerCase()}_sm.png`} alt=""/>
                        </span>
                        <span className="cur__name">{name}</span>
                    </div>
                    <div className="sidebar__num">{rates[name]}</div>
                </div>
            )
        }

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
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
