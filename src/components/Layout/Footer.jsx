import React from 'react';

export default class Modal extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="box">
                    <div className="copyright">
                        © 2017 My Bit.   All rights reserved.
                    </div>
                    <div className="footer__linkWrap">
        				<a
                            href="https://gist.github.com/MyBitDev/4bbd6aec6904a6c21eb47c3179287078"
                            className="footer__link"
                            target="_blank"
                        >Code</a>
        				<a href="/MyBit_Deal_Sheet.pdf" className="footer__link" target="_blank">Deal Sheet</a>
        				<a href={__REDIRECT_URL__} className="footer__link">Contact Us</a>
        			</div>
                </div>
            </footer>
        );
    }
}
