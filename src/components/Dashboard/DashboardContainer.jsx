import React from 'react';

import CardList from './Cards/CardList';
import Side from './Side/SideContainer';
import Main from './Main/MainContainer';

export default class Dashboard extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="box">
                    <h1 className="h1">Dashboard</h1>
                    <CardList />
                    <Side />
                    <Main />
                </div>
            </section>
        );
    }
}
