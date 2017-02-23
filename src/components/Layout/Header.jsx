import React from 'react';

export default class Modal extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <button className="menuBtn js-menuTrigger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <a href="" className="logo">
                        <img src="images/logo@2x.png" alt=""/>
                    </a>
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
                            <li className="header__menuLi barParent active">
                                <div className="bar"></div>
                                <a href="" className="header__menuItem">Dashboard</a>
                            </li>
                            <li className="header__menuLi barParent">
                                <div className="bar"></div>
                                <a href="" className="header__menuItem">2FA</a>
                            </li>
                            <li className="header__menuLi barParent">
                                <div className="bar"></div>
                                <a href="" className="header__menuItem">Account Settings</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="menuS ">
                    <a href="" className="menuS__logo">
                        <img src="images/logo@2x.png" alt=""/>
                    </a>
                    <a href="" className="menuS__close icon-cross"></a>
                    <div className="menuS__wrap">
                        <ul className="menuS__list">
                            <li className="menuS__li barVerParent active">
                                <div className="barVer"></div>
                                <a href="" className="menuS__item">Dashboard</a>
                            </li>
                            <li className="menuS__li barVerParent">
                                <div className="barVer"></div>
                                <a href="" className="menuS__item">2FA</a>
                            </li>
                            <li className="menuS__li barVerParent">
                                <div className="barVer"></div>
                                <a href="" className="menuS__item">Account Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menuS__backdrops"></div>
            </div>
        );
    }
}
