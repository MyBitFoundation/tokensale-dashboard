import React from 'react';

import AdditonSection from './Addition/AdditionSection';
import CardList from './Cards/CardList';
import Side from './Side/SideContainer';
import Main from './Main/MainContainer';
import Translate from 'react-translate-component';

export default class Dashboard extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="box">
                    {/*<AdditonSection />*/}
                    <h1 className="h1"><Translate content="dashboard.header"/></h1>

	                <Side />

                    <Main />
                </div>
            </section>
        );
    }
}
