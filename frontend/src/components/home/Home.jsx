import React, { Fragment } from 'react';
import Header from '../template/Header';

export default props =>
    <Fragment>
        <Header icon="home" title="Início" subtitle="Aprendizado de React"/>
        <main className="content">
            <div>
                Bem-vindo
            </div>
        </main>
    </Fragment>