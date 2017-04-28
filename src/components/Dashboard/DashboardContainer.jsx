import React from 'react';

import AdditonSection from './Addition/AdditionSection';
import CardList from './Cards/CardList';
import Side from './Side/SideContainer';
import Main from './Main/MainContainer';

export default class Dashboard extends React.Component {
    render() {
        return (
            <section className="content">
                <div className="box">
                    {/*<AdditonSection />*/}
                    <h1 className="h1">Dashboard</h1>
	
	                <Side />
	                
                    <Main />
                </div>
            </section>
        );
    }
}
