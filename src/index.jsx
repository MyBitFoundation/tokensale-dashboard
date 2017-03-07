import 'assets/favicon.ico';
import 'file-loader?name=index.html!assets/index.html';
import 'assets/images.loader.js';
import 'assets/css.loader.js';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from 'stores/RootReducer';
import { component } from 'app/routes';

import {initialize} from 'actions/GlobalActions';
import {load} from 'actions/DashboardActions';

const store = configureStore(browserHistory, window.__initialState__);
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(initialize()).then(() => {
	store.dispatch(load());

	setInterval(() => {
		store.dispatch(load());
	}, 5 * 60 * 1000);

	ReactDOM.render(
	    <Provider store={store}>
	        <Router history={history} routes={component} />
	    </Provider>,
	    document.getElementById('root')
	);
});
