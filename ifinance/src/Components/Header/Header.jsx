import React from 'react';
import './Header.css'
import twitter from '../../Assets/twitter.png'
import facebook from '../../Assets/facebook.png'
import medium from '../../Assets/medium.png'
import logo from '../../Assets/logo.png'
import menu from '../../Assets/menu.png'

const Header = () => {
    return ( 
        <div className="header-container">
            <div className="header-social-icons">
                <img className="header-icon" src={twitter} alt="twitter"/>
                <img className="header-icon" src={facebook} alt="twitter"/>
                <img className="header-icon" src={medium} alt="twitter"/>
            </div>
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header-menu">
                <img src={menu} alt="menu" />
            </div>
        </div>
     );
}
 
export default Header;