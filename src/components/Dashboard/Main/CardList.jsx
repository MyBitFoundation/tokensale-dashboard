import React from 'react';

export default class CardList extends React.Component {
    render() {
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
                                    <b className="mark1">100 </b>
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
                                    <b className="mark2">23 </b>
                                    <span className="pr-10">Days</span>
                                </div>
                                <div className="colspan">
                                    <b className="mark3">7 </b>
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
                                <b className="mark4">0.0000081</b>
                            </div>
                            <div className="card__infoLabel">BITS Balance</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
