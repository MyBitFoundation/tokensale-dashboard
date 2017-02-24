import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';


import modalsReducer from './ModalsReducer';
import accountReducer from './AccountReducer';
import dashboardReducer from './DashboardReducer';

export function configureStore(history, initialState) {
    const reducers = combineReducers({
        routing: routerReducer,
        modals: modalsReducer,
        account: accountReducer,
        dashboard: dashboardReducer
    });

    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(thunk),
            applyMiddleware(
                routerMiddleware(history)
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
}