import { Link } from 'gatsby';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-brands-svg-icons'
import '../../utils/fonts-awesome'

import './sidebar.css'
import React from 'react';

const Menu = () => (

        <nav className="sidebar__menu">
            <ul>
                <li>
                    <Link className="sidebar__links" to="/acerca-de-nosotros">
                        <FontAwesomeIcon 
                        className="sidebar__icons" 
                        icon={'notes-medical'} />
                        Quienes somos
                    </Link>
                </li>
                <li>
                    <Link className="sidebar__links" to="/especialidades">
                        <FontAwesomeIcon 
                        className="sidebar__icons" 
                        icon={'tooth'} />
                        Especialidades
                    </Link>
                </li>
                <li>
                    <Link className="sidebar__links" to="/equipo">
                        <FontAwesomeIcon 
                        className="sidebar__icons" 
                        icon={'user-md'} />
                        Equipo
                    </Link>
                </li>
                <li>
                    <Link className="sidebar__links" to="/contacto">
                        <FontAwesomeIcon 
                        className="sidebar__icons" 
                        icon={'envelope'} />
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    
)

export default Menu;