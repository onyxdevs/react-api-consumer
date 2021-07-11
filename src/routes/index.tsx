import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AsyncHomePage = React.lazy(() => import('./HomePage'));
const AsyncSinglePost = React.lazy(() => import('./SinglePost'));
const AsyncErrorPage = React.lazy(() => import('./ErrorPage'));

const Routes = () => (
    <Switch>
        <Route path="/posts/:id">
            <AsyncSinglePost />
        </Route>
        <Route path="/" exact>
            <AsyncHomePage />
        </Route>
        <Route>
            <AsyncErrorPage />
        </Route>
    </Switch>
);

export default Routes;
