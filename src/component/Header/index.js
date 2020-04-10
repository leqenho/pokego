import React from 'react';

import logo from '../../assets/image/';
import "./styles.scss";

export default function Header() {
    return (
        <>
            <header id="Header" >
                <img className="logo" src={logo} alt="Pokelogo" />
            </header>
            <div className="clear"></div>
        </>
    );
}
