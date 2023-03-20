import React from 'react';

import logo from '../../assets/images/logo.png';

import './styles.scss';

const Navbar = () => {

    const label = ['Acceuil', 'Profil', 'Réglage', 'Communauté'];
    return (
        <div className='navbar'>
            <div className='navbar__logo-wrapper'>
                <img className='navbar__logo-item' src={logo} alt="logo" />
            </div>
            <ul className='navbar__list'>
                {label.map((item, index) => {
                    return (
                        <li className="navbar__list-item" key={index}>{item}</li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default Navbar;