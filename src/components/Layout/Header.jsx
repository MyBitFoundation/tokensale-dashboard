import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps){
    return {
        location: state.routing.locationBeforeTransitions.pathname
    };
}

function mapDispatchToProps(dispatch){
    return {};
}

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    onToggleMenu() {
        let open = !this.state.open;
        document.body.className = open ? "menu-open" : "";
        this.setState({open});
    }

    onClose() {
        document.body.className = "";
        this.setState({open: false});
    }

    render() {
        let {location} = this.props;
        let {open} =this.state;

        return (
            <div>
                <header className="header">
                    <button type="button" className={`menuBtn js-menuTrigger ${open ? 'menu-open' : ''}`} onClick={this.onToggleMenu.bind(this)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link to="/" className="logo">
                        <img src="images/logo@2x.png" alt=""/>
                    </Link>
                    <div className="header__profile">
                        <div>
                            <a href="" className="header__profileName ">valik_prusskiy@gmail.com</a>
                            <a href="" className="header__login none" data-toggle="modal" data-target="#modalLogin">
                                <span className="">LOGIN</span>
                                <span className="header__loginIcon icon-door"></span>
                            </a>
                        </div>

                        <div>
                            <a href="" className="header__sign">Sign Up</a>
                        </div>
                    </div>
                    <div className="header__menu">
                        <ul className="header__menuList">
                            <li className={`header__menuLi barParent ${location === "/" ? 'active' : ''}`}>
                                <div className="bar"></div>
                                <Link to="/" className="header__menuItem">Dashboard</Link>
                            </li>
                            <li className={`header__menuLi barParent ${location === "/fa" ? 'active' : ''}`}>
                                <div className="bar"></div>
                                <Link to="/fa" className="header__menuItem">2FA</Link>
                            </li>
                            <li className={`header__menuLi barParent ${location === "/settings" ? 'active' : ''}`}>
                                <div className="bar"></div>
                                <Link to="/settings" className="header__menuItem">Account Settings</Link>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className={`menuS ${open ? 'menu-open' : ''}`}>
                    <a href="/" className="menuS__logo">
                        <img src="images/logo@2x.png" alt=""/>
                    </a>
                    <a href="javascript:;" className="menuS__close icon-cross" onClick={this.onClose.bind(this)}></a>
                    <div className="menuS__wrap">
                        <ul className="menuS__list">
                            <li className={`menuS__li barVerParent ${location === "/" ? 'active' : ''}`}>
                                <div className="barVer"></div>
                                <a href="/" className="menuS__item">Dashboard</a>
                            </li>
                            <li className={`menuS__li barVerParent ${location === "/fa" ? 'active' : ''}`}>
                                <div className="barVer"></div>
                                <a href="/fa" className="menuS__item">2FA</a>
                            </li>
                            <li className={`menuS__li barVerParent ${location === "/settings" ? 'active' : ''}`}>
                                <div className="barVer"></div>
                                <a href="/settings" className="menuS__item">Account Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menuS__backdrops"></div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
