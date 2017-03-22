import React from 'react';

export default class Modal extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="box">
                    <div className="copyright">
                        © 2017 My Bit.   All rights reserved.
                    </div>
                    <div className="">
                        <a href={__REDIRECT_URL__} className="footer__contact">Contact Us</a>
                    </div>
                </div>
            </footer>
        );
    }
}
