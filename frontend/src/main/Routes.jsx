import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/user/Crud';

export default props =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={UserCrud} />
        <Redirect from="*" to="/" />
    </Switch>
