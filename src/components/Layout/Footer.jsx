import React from 'react';
import { Link } from 'react-router';

export default class Modal extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="box">
                    <div className="copyright">
                        © 2017 My Bit.   All rights reserved.
                    </div>
                    <div className="footer__linkWrap">
        				<Link
                            to="https://gist.github.com/MyBitDev/4bbd6aec6904a6c21eb47c3179287078"
                            className="footer__link"
                            target="_blank"
                        >Code</Link>
        				<Link to="/MyBit_Deal_Sheet.pdf" className="footer__link" target="_blank">Deal Sheet</Link>
        				<Link to="https://mybit.io#contact" className="footer__link" target="_blank">Contact Us</Link>
        			</div>
                </div>
            </footer>
        );
    }
}
