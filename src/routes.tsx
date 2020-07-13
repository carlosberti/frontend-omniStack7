import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import New from './pages/New';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/new" component={New} />
    </Switch>
)

export default Routes;