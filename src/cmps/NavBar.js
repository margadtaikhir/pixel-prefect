import React from 'react';
import logo from '../styles/images/logo.svg'

const NavBar = _ => {
    return <div className="nav-bar flex space-between align-center">
        <img src={logo} style={{width:176, height:52}}alt="logo" />
        <div className="menu flex space-around">
            <p>Features</p> 
            <p>Team</p> 
            <p>Sign In</p>
       </div>
    </div>
}

export default NavBar;