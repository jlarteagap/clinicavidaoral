import React from 'react';
import './sidebar.css';

import Menu from './menu';
import Image from '../images';
import { Link } from 'gatsby';

export default function Sidebar(){
    return(
        <div className="sidebar">
            <bgImage name="maxilofacial">
                <div className="sidebar__logo">
                    <Link to="/">
                        <Image name="logo" />
                    </Link>
                    <Menu />
                </div>
            </bgImage>
        </div>
    )
}