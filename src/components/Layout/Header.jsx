import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Translate from 'react-translate-component';

import {signOut} from 'actions/GlobalActions';

function mapStateToProps(state, ownProps) {
	return {
		location: state.routing.locationBeforeTransitions.pathname,
		email: state.account.get('email')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		signOut: () => dispatch(signOut())
	};
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

	onSignOut() {
		this.props.signOut();
	}

	render() {
		let {location} = this.props;
		let {open} = this.state;

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
							<div className="header__profileName">{this.props.email}</div>
							<a href="" className="header__login none" data-toggle="modal" data-target="#modalLogin">
								<span className="">LOGIN</span>
								<span className="header__loginIcon icon-door"></span>
							</a>
						</div>

						<div>
							<a href="javascript:;" className="header__sign" onClick={this.onSignOut.bind(this)}><Translate content="header.sign_out"/></a>
						</div>
					</div>
					<div className="header__menu">
						<ul className="header__menuList">
							<li className={`header__menuLi barParent`}>
								<div className="bar"/>
								<a href={__REDIRECT_URL__} className="header__menuItem"><Translate content="header.back"/> </a>
							</li>
							<li className={`header__menuLi barParent ${location === "/" ? 'active' : ''}`}>
								<div className="bar"/>
								<Link to="/" className="header__menuItem"><Translate content="header.dashboard"/></Link>
							</li>
							<li className={`header__menuLi barParent ${location === "/tfa" ? 'active' : ''}`}>
								<div className="bar"/>
								<Link to="/tfa" className="header__menuItem"><Translate content="header.tfa"/></Link>
							</li>
							<li className={`header__menuLi barParent ${location === "/settings" ? 'active' : ''}`}>
								<div className="bar"/>
								<Link to="/settings" className="header__menuItem"><Translate content="header.account_settings"/></Link>
							</li>
							<li className={`header__menuLi barParent ${location === "/terms&conditions" ? 'active' : ''}`}>
								<div className="bar"/>
								<Link to="/terms&conditions" className="header__menuItem"><Translate content="header.tac"/></Link>
							</li>
							<li className={`header__menuLi barParent ${location === "/affiliates" ? 'active' : ''}`}>
								<div className="bar"/>
								<Link to="/affiliates" className="header__menuItem"><Translate content="header.affiliates"/></Link>
							</li>
						</ul>
					</div>
				</header>
				<div className={`menuS ${open ? 'menu-open' : ''}`}>
					<Link to="/" onClick={this.onClose.bind(this)} className="menuS__logo">
						<img src="images/logo@2x.png" alt=""/>
					</Link>
					<a href="javascript:;" className="menuS__close icon-cross" onClick={this.onClose.bind(this)}></a>
					<div className="menuS__wrap">
						<ul className="menuS__list">
							<li className={`menuS__li barVerParent ${location === "/" ? 'active' : ''}`}>
								<div className="barVer"></div>
								<Link to="/" onClick={this.onClose.bind(this)} className="menuS__item"><Translate content="header.dashboard"/></Link>
							</li>
							<li className={`menuS__li barVerParent ${location === "/tfa" ? 'active' : ''}`}>
								<div className="barVer"></div>
								<Link to="/tfa" onClick={this.onClose.bind(this)} className="menuS__item"><Translate content="header.tfa"/></Link>
							</li>
							<li className={`menuS__li barVerParent ${location === "/settings" ? 'active' : ''}`}>
								<div className="barVer"></div>
								<Link to="/settings" onClick={this.onClose.bind(this)} className="menuS__item"><Translate content="header.account_settings"/></Link>
							</li>
							<li className={`menuS__li barVerParent ${location === "/terms&conditions" ? 'active' : ''}`}>
								<div className="barVer"></div>
								<Link to="/terms&conditions" onClick={this.onClose.bind(this)} className="menuS__item"><Translate content="header.tac"/></Link>
							</li>
							<li className={`menuS__li barVerParent ${location === "/affiliates" ? 'active' : ''}`}>
								<div className="barVer"></div>
								<Link to="/affiliates" onClick={this.onClose.bind(this)} className="menuS__item"><Translate content="header.affiliates"/></Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="menuS__backdrops"></div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
