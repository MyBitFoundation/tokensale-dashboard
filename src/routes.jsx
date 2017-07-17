import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from 'components/App';
import Dashboard from 'components/Dashboard/DashboardContainer';
import FA from 'components/2FA/2FAContainer';
import Settings from 'components/Settings/SettingsContainer';
import TermsAndConditions from 'components/TermsAndConditions/TermsAndConditions';
import Affiliate from 'components/Affiliates/AffiliateContainer';

import {checkAuthorization} from 'actions/GlobalActions';

const component = (
    <Route path='/' component={App} onEnter={checkAuthorization()}>
        <IndexRoute component={Dashboard} onEnter={checkAuthorization()}/>
        <Route path="tfa" component={FA} onEnter={checkAuthorization()}/>
        <Route path="settings" component={Settings} onEnter={checkAuthorization()}/>
        <Route path="terms&conditions" component={TermsAndConditions} onEnter={checkAuthorization()} />
        <Route path="affiliates" component={Affiliate} onEnter={checkAuthorization()} />
    </Route>
);

export { component };
