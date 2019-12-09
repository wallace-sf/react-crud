import React from 'react';
import Logo from '../components/template/Logo';
import Menu from '../components/template/Menu';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default props =>
    <div className="app">
        <Logo />
        <Menu />
        <Main />
        <Footer />
    </div>