import { Link } from 'gatsby';

import './sidebar.css'
import React from 'react';

const Menu = () => (

        <nav className="sidebar__menu">
            <ul>
                <li>
                    <Link to="/acerca-de-nosotros">Quienes somos?
                    </Link>
                </li>
                <li>
                    <Link to="/especialidades">Especialidades
                    </Link>
                </li>
                <li>
                    <Link to="/equipo">Equipo
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    
)

export default Menu;