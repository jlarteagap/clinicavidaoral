import React from 'react';
import Sidebar from '../Sidebar/sidebar';

export default function Layout({ children }) {
    return(
        <div className="main">
            <Sidebar />
            <div className="container">
                {children}
                <footer>
                    <p>Desde footer</p>
                </footer>
            </div>
        </div>
    )
}