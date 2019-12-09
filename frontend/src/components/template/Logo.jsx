import React from 'react';

import './Logo.css';
import logo from '../../assets/imgs/logo.png';

export default props =>
    <aside className="logo">
        <img src={logo} alt="Logo" />
    </aside>