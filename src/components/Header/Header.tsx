import React from 'react';
import { NavLink } from 'react-router-dom';

import styleClasses from './Header.module.scss';

const Header: React.FC = () => (
    <header className={styleClasses['header']}>
        <NavLink
            to="/"
            exact
            className={styleClasses['header__title']}
            activeClassName={styleClasses['header__title--active']}
        >
            API Consumer
        </NavLink>
    </header>
);

export default Header;
