//import React from 'react';
import headerLogo from '../images/logo-mesto.svg';//лого Место


function Header() {
    return (
        <header className="header">
            <img
                src={headerLogo}
                alt="Логотип Место."
                className="logo" />
        </header>
    )
}
export default Header;