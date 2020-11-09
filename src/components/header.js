import React from 'react'
import Image from './images'
import './Header/Header.css'

export default function Header() {
    return(
        <header className="header">
            <div className="header__logo">
                <Image name="logo"/>
            </div>
        </header>
    )
}