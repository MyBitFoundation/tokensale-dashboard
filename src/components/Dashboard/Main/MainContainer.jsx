import React from 'react';

import CardList from './CardList';
import Box from './Box';
import History from './History';

export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <CardList />
                <Box />
                <History />
            </div>
        );
    }
}
