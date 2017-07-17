import React from 'react';
import { connect } from 'react-redux';
import Translate from 'react-translate-component';

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

class TableReferrer extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 4,

        }
    }

    onMore() {
        let count = this.state.count + 4;
        this.setState({count});
    }

    onSort() {

    }

    getReferrerTable() {

    }

    render() {
        return (
            <div className="ref">
                <div className="title">Affileates</div>
                <div className="ref__table">
                    <div className="ref__tableHead">
                        <div className="tr">
                            <div className="td td-email">
                                <a href="" className="sort">
                                    Email <span className="sortIcon icon-arrow_dropdown"></span>
                                </a>
                            </div>
                            <div className="td td-address">
                                <a href="" className="sort">
                                    ETH Address <span className="sortIcon icon-arrow_dropdown"></span>
                                </a>
                            </div>
                            <div className="td td-amount">
                                <a href="" className="sort">
                                    Amount In ETH Contributed <span className="sortIcon icon-arrow_dropdown"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ref__tableBody">
                        <div className="tr">
                            <div className="td td-email">
                                <div className="tdIn">valentinecook_087@gmail.com</div>
                            </div>
                            <div className="td td-address">
                                <div className="tdIn">0x6e0eC952e49212F2e2E2f94FEdaa84f5C044acef</div>
                            </div>
                            <div className="td td-amount">
                                <div className="tdIn">
                                    <b>0.156007</b>
                                    <span>ETH</span>
                                    <span className="cur__icon">
                                        <img src="images/eth_sm.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="td td-email">
                                <div className="tdIn">valentinecook_087@gmail.com</div>
                            </div>
                            <div className="td td-address">
                                <div className="tdIn">0x6e0eC952e49212F2e2E2f94FEdaa84f5C044acef</div>
                            </div>
                            <div className="td td-amount">
                                <div className="tdIn">
                                    <b>0.006789167</b>
                                    <span>ETH</span>
                                    <span className="cur__icon">
                                        <img src="images/eth_sm.png" alt="" />
										</span>
                                </div>
                            </div>
                        </div>
                        <div className="tr">
                            <div className="td td-email">
                                <div className="tdIn">valentinecook_087@gmail.com</div>
                            </div>
                            <div className="td td-address">
                                <div className="tdIn">0x6e0eC952e49212F2e2E2f94FEdaa84f5C044acef</div>
                            </div>
                            <div className="td td-amount">
                                <div className="tdIn">
                                    <b>2.6</b>
                                    <span>ETH</span>
                                    <span className="cur__icon">
                                        <img src="images/eth_sm.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ref__tableBtns">
                        <button className="btn btn-more ">
                            <span className="btnText">More</span>
                            <span className="btnIcon icon-arrow"></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TableReferrer);