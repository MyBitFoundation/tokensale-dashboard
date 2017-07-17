import React from 'react';
import { Link } from 'react-router';

export default class AdditionSection extends React.Component {
    render() {
        return (
            <div className="sec__advt">
                <p>
                    Disclaimer: By sending Ether or any form of cryptocurrency to the address(es) below, - I confirm to have carefully read and understood the Terms & Conditions (underlined and hyperlink to T&C page) of the MyBit Token Sale (the Terms) and I agree to be bound by such Terms; including: I represent and warrant that I am legally permitted to purchase MyB (in particular, that I am not subject to any of the limitations set forth on the front page and/or in section 1827 (Sales Restrictions) of the Terms); that I am of a sufficient age to legally purchase MyB or have received permission from a legal guardian who has reviewed and agreed to these Terms; warrant that I will take sole responsibility for any restrictions and risks associated with the purchase of MyB as set forth in the Terms; that I am not exchanging Ether (ETH) or other tokens or currencies for MyB for the purpose of speculative investment; that I am acquiring MyB for the use of decentralized application services or the purchase of tokens specific to forthcoming decentralized applications on the MyBit Platform, or to facilitate development, testing, deployment and operation of decentralized applications on the MyBit Platform; and that I have an understanding of the usage and intricacies of cryptographic tokens and blockchain-based software systems and the risks related to a purchase of such tokens (in particular those outlined in sections 5 and 18 of the Terms).
                </p>
                <div className="sec__advtListTitle"><b>Steps to Contribute in Ether</b></div>
                <ul>
                    <li>Obtain Ether and transfer it to an Erc20 compliant ethereum wallet (mist, parity, Jaxx, MEW, etc.) DO NOT SEND DIRECTLY FROM AN EXCHANGE OR WALLET YOU DO NOT CONTROL YOUR PRIVATE KEYS AT!</li>
                    <li>Send Ether to the address listed below</li>
                    <li>On your local wallet go to contracts -> watch token -> and add this address to watch $MyB</li>
                    <li>That's it! Once Ether is received by the smart contract, $MyB will be minted and instantly transferred to your local wallet</li>
                </ul>
            </div>
        );
    }
}
