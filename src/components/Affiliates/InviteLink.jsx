import React from 'react';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

function mapStateToProps(state, ownProps) {
    return {
        referralLink: __REDIRECT_URL__+'/?ref='+state.account.get('referralKey')
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

class InviteLink extends React.Component {

    constructor() {
        super();
        this.state = {
            copied: false
        };
    }

    copy() {
        copy(this.props.referralLink);
        this.setState({copied: true});
    }

    render() {
        let {referralLink} = this.props;
        let {copied} = this.state;

        return (
            <div className="address">
                <div className="invite">
                    <span className="invite__icon icon-attach"></span>
                    <span className="invite__text"><Translate content="affiliates.invite_link"/>:</span>
                </div>
                <div className="address__fieldWrap visible-xs">
                    <input type="text" readOnly className="address__field" value={referralLink} />
                </div>
                <button className={`address__btn ${copied ? 'active' : ''}`} onClick={() => this.copy()}>
                    <span className="btnText">{copied ? counterpart.translate('affiliates.copied') : counterpart.translate('affiliates.copy_link')}</span> {copied ? <span className="btnIcon icon-check" /> : null}
                </button>
                <div className="address__fieldWrap hidden-xs">
                    <input type="text" readOnly className="address__field" value={referralLink} />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InviteLink);