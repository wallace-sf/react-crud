import React, { Fragment } from 'react';
import Home from '../home/Home';
import UserCrud from '../user/Crud';

export default props =>
    <Fragment>
        <Home />
        <UserCrud />
    </Fragment>