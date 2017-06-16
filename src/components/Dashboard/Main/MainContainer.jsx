import React from 'react';

import CardList from '../Cards/CardList';
// import Box from './Box';
import PresaleAddress from './PresaleAddress';
import History from './History';
// Bonus/Bonuses

export default class Main extends React.Component {
    render() {
        return (
            <div className="main margin1">
	            <div className="presale">
		            <div className="presale__head">
			            <div className="presale__headLeft"><b>Pre-Sale Bonuses:</b></div>
			            <div className="presale__headRight">
				            <div className="presale__headItem">
								<span className="cur__icon">
									<img src="images/eth_sm.png" alt="" />&nbsp;
								</span>
					            <b>25+ ETHER &nbsp;</b>
					            <span className="">receives a 10% Bonus</span>
				            </div>
				            <div className="presale__headItem">
								<span className="cur__icon">
									<img src="images/eth_sm.png" alt="" />&nbsp;
								</span>
					            <b>100+ ETHER &nbsp;</b>
					            <span className="">receives a 15% Bonus</span>
				            </div>
			            </div>
		            </div>
		            <div className="presale__body">
			            <div className="presale__note">
				            Bonuses will be in the form of MyB tokens issued after the close of Tokensale.
			            </div>
			            <div className="presale__attn">
				            <b className="presale__attnTitle">IMPORTANT NOTICE:</b>
				            The minimum amount to participate in the pre-sale is 25 ETHER. If you send less than this amount during the pre-sale, your funds will be returned to you. For amounts under 25 ETHER please wait until the pre-sale is over and the official crowdsale begins to ensure your funds are not lost.
			            </div>
		            </div>
	            </div>
	            <CardList />
                {/*<Box />*/}
                <PresaleAddress />
                <History />
            </div>
        );
    }
}
