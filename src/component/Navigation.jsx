import React from 'react';
import * as routes from '../pages';
import Logo from '../logo.svg';
import { Link } from '.';

import '../styles/components/Navigation.scss';

export const Navigation = () => (
    <nav className='nav'>
        <img className='nav__logo' src={ Logo } alt='logo' width='55'/>
        <ul className='nav__items'>
            {
                Object.values(routes)
                .filter(({ name }) => name)
                .map(({ name, path }) => (
                    <li key={ path } className='nav__item'>
                        <Link
                            to={ path }
                            className='nav__link'
                            isNav
                            exact
                            activeClassName='nav__link--active'
                        >
                            { name }
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
);