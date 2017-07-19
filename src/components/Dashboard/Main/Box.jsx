import React from 'react';
import { connect } from 'react-redux';

import ModalsActions from 'actions/ModalsActions';

function mapStateToProps(state){
    return {};
}

function mapDispatchToProps(dispatch){
    return {
        openStep1: (currency) => dispatch(ModalsActions.openStep1(currency))
    };
}


class Box extends React.Component {

    onOpenStep1(currency) {
        this.props.openStep1(currency);
    }

    render() {
        return (
            <div className="cur__box">
                <div className="cur__boxTitle">Pay with:</div>
                <div className="cur__listWrap">
                    <div className="cur__list cur__list-5">
                        <a href="javascript:;" className="cur__item" onClick={this.onOpenStep1.bind(this, 'btc')}>
                            <span className="cur__icon">
                                <img src="images/btc.png" alt=""/>
                            </span>
                            <span className="cur__name">btc</span>
                        </a>
                        <a href="javascript:;" className="cur__item" onClick={this.onOpenStep1.bind(this, 'etc')}>
                            <span className="cur__icon">
                                <img src="images/etc.png" alt=""/>
                            </span>
                            <span className="cur__name">etc</span>
                        </a>
                        {/*<a href="javascript:;" className="cur__item" onClick={this.onOpenStep1.bind(this, 'eth')}>*/}
                            {/*<span className="cur__icon">*/}
                                {/*<img src="images/eth.png" alt=""/>*/}
                            {/*</span>*/}
                            {/*<span className="cur__name">eth</span>*/}
                        {/*</a>*/}
                        <a href="javascript:;" className="cur__item" onClick={this.onOpenStep1.bind(this, 'xmr')}>
                            <span className="cur__icon">
                                <img src="images/xmr.png" alt=""/>
                            </span>
                            <span className="cur__name">xmr</span>
                        </a>
                        <a href="javascript:;" className="cur__item" onClick={this.onOpenStep1.bind(this, 'dash')}>
                            <span className="cur__icon">
                                <img src="images/dash.png" alt=""/>
                            </span>
                            <span className="cur__name">dash</span>
                        </a>
                        <a href="javascript:;" className="cur__item" onClick={this.onOpenStep1.bind(this, 'rep')}>
                            <span className="cur__icon">
                                <img src="images/rep.png" alt=""/>
                            </span>
                            <span className="cur__name">rep</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Box);
