import React from 'react';

import './Menu.css';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/home">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>