import React from 'react';
import { Link } from 'react-router';

export default class AdditionSection extends React.Component {
    render() {
        return (
            <div className="sec__advt">
                <p><b>Dear All</b></p>
                <p>
                    Numerous parties have brought to our attention that the recent spike in Ethereum (>350%) has made the pricing tiers coded into our smart contract unrealistic. For this reason we are closing the current crowdfund, fixing the pricing structure, and will re-open on April 27, 2017 after a successful audit has been completed. If you have sent funds to the current contract, you will be receiving a personalized email. Otherwise please refrain from sending any funds to the contract.
                </p>
                <div className="sec__advtListTitle">Here is the agenda leading up to re-launch:</div>
                <ul>
                    <li>Re-configure pricing tiers and publicize an updated deal sheet</li>
                    <li>Update smart contract code to reflect these changes in pricing structure</li>
                    <li>Smart contract audit conducted </li>
                    <li>Re-sync contract to ICO dashboard</li>
                    <li>Run numerous security audits on the dashboard</li>
                </ul>
                <p>
                    Pre-sale contracts with potential discounts will also be made available for anyone desiring to send a minimum of 25 ETH. Please contact
                    <Link to="https://mybit.io#contact" className="sec__advtLink" target="_blank"> <b>info@mybit.io</b> </Link> 
                    for additional details.
                </p>
                <p>Thank you for your understanding,</p>
                <p>The MyBit Team</p>

            </div>
        );
    }
}
