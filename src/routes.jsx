import React from 'react';

import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from 'components/App';

import Dashboard from 'components/Dashboard/DashboardContainer';

const component = (
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard}/>
    </Route>
);

export { component };
