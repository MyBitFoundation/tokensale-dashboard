import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from 'components/App';
import Dashboard from 'components/Dashboard/DashboardContainer';
import FA from 'components/2FA/2FAContainer';
import Settings from 'components/Settings/SettingsContainer';

import {initialize} from 'actions/GlobalActions';

const component = (
    <Route path='/' component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="fa" component={FA} />
        <Route path="settings" component={Settings} />
    </Route>
);

export { component };
