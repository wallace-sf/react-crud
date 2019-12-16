import React from 'react';
import Logo from '../components/template/Logo';
import Menu from '../components/template/Menu';
import Footer from '../components/template/Footer';
import Routes from './Routes';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Menu />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>