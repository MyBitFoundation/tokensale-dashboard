import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state, ownProps){
    return {
        balance: state.account.get('balance')
    };
}

function mapDispatchToProps(dispatch){
    return {};
}

class CardList extends React.Component {
    render() {
        let ms = new Date(__TIME__) - Date.now();
        let dayTimestamp = 24 * 60 * 60 * 1000;
        let days = Math.floor(ms / dayTimestamp);
        let hours = Math.floor(ms / 1000 / 60 / 60) - (days * 24);


        let endDate = new Date(__TIME__);
        let currentDate = Date.now();
        let tokenPrice;
        if (endDate - currentDate > 3 * 7 * dayTimestamp){
            tokenPrice = 100;
        } else if (endDate - currentDate > 7 * dayTimestamp){
            tokenPrice = 150;
        }
         else {
            tokenPrice = 250;
        }

        return (
            <div className="card__list">
                <div className="card">
                    <div className="cardIn">
                        <div className="card__pic bg1">
                            <img src="images/arrows@2x.png" alt="" height="26"/>
                        </div>
                        <div className="card__info">
                            <div className="card__infoData">
                                <div className="colspan">
                                    <b className="mark1">1 </b>
                                    <span>ETH</span>
                                </div>
                                <span className="equal">=</span>
                                <div className="colspan">
                                    <b className="mark1">{tokenPrice} </b>
                                    <span>Token</span>
                                </div>
                            </div>
                            <div className="card__infoLabel">Crowdsale Price</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="cardIn">
                        <div className="card__pic bg2">
                            <img src="images/clock@2x.png" alt="" height="32"/>
                        </div>
                        <div className="card__info">
                            <div className="card__infoData">
                                <div className="colspan">
                                    <b className="mark2">{days} </b>
                                    <span className="pr-10">Days</span>
                                </div>
                                <div className="colspan">
                                    <b className="mark3">{hours} </b>
                                    <span>Hours</span>
                                </div>
                            </div>
                            <div className="card__infoLabel">Time Left</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="cardIn">
                        <div className="card__pic">
                            <img src="images/logo@2x.png" alt="" height="62"/>
                        </div>
                        <div className="card__info">
                            <div className="card__infoData">
                                <b className="mark4">{this.props.balance}</b>
                            </div>
                            <div className="card__infoLabel">BITS Balance</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardList);