import React, { Fragment } from 'react';
import Header from '../header'
export default function Layout({ children }) {
    return(
        <Fragment>
            <Header />
            <div className="container">
                {children}
            </div>
            <footer>
                <p>Desde footer</p>
            </footer>
        </Fragment>
    )
}