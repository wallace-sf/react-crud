import React, { Fragment } from 'react';
import Header from '../template/Header';

import './Main.css';

export default props =>
    <Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="mt-3 p-3">
                {props.children}
            </div>
        </main>
    </Fragment>