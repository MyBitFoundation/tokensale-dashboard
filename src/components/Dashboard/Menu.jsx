import React from 'react';

export default class Modal extends React.Component {
    render() {
        return (
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
        );
    }
}
