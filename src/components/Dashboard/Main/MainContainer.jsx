import React from 'react';

import CardList from '../Cards/CardList';
import Box from './Box';
import PresaleAddress from './PresaleAddress';
import History from './History';
import Translate from 'react-translate-component';

export default class Main extends React.Component {
    render() {
        return (
            <div className="main margin1">
	            <div className="presale" >
					{/*<div className="presale__head">
			            <div className="presale__headLeft"><b><Translate content="dashboard.main.presale.head"/></b></div>
			            */}
			            {/*<div className="presale__headRight">
				            <div className="presale__headItem">
								<span className="cur__icon">
									<img src="images/eth_sm.png" alt="" />&nbsp;
								</span>
					            <b>25+ ETHER &nbsp;</b>
					            <span className=""><Translate content="dashboard.main.presale.receives_10_bonus"/></span>
				            </div>
				            <div className="presale__headItem">
								<span className="cur__icon">
									<img src="images/eth_sm.png" alt="" />&nbsp;
								</span>
					            <b>100+ ETHER &nbsp;</b>
					            <span className=""><Translate content="dashboard.main.presale.receives_15_bonus"/></span>
				            </div>
			            </div>*/}
					{/*</div>
		            <div className="presale__body">
			            <div className="presale__note">
				            <Translate content="dashboard.main.presale.note"/>
			            </div>
			            <div className="presale__attn">
				            <b className="presale__attnTitle"><Translate content="dashboard.main.presale.attention_title"/> </b>
				            <Translate content="dashboard.main.presale.attention"/>
			            </div>
		            </div>*/}
	            </div>
	            <CardList />
                <PresaleAddress />
                <Box />
                <History />
            </div>
        );
    }
}
