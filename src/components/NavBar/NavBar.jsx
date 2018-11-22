import React from 'react';
import logo from '../../assets/logo.png';

const NavBar = () => {
    return ( 
        <header className="header-app">
            <img 
                className="header-app--logo"
                src={logo}
                alt="Logo"/> My-shop application
        </header>
     );
}
 
export default NavBar;