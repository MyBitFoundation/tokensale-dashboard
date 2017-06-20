import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';


export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="box">
                    <div className="copyright">
                        © 2017 My Bit.   <Translate content="footer.rights"/>
                    </div>
                    <div className="footer__linkWrap">
        				<Link
                            to="https://gist.github.com/MyBitDev/4bbd6aec6904a6c21eb47c3179287078"
                            className="footer__link"
                            target="_blank"
                        ><Translate content="footer.code"/></Link>
                      <Link to="/MyBit_Deal_Sheet.pdf" className="footer__link" target="_blank"><Translate content="footer.deel"/></Link>
        				<Link to="https://mybit.io#contact" className="footer__link" target="_blank"><Translate content="footer.contact"/></Link>
        			</div>
                </div>
            </footer>
        );
    }
}
