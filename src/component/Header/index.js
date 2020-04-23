import React from 'react';

import logo from '../../assets/image/';
import { IoMdMenu } from 'react-icons/io/';
import "./styles.scss";
import { connect } from 'react-redux';

const Header = () => (
    <>
        <header id="Header" >
            <div className="btn__container">
                <button className="btn__aside">
                    <IoMdMenu size={35} />
                </button>
            </div>

            <img className="logo" src={logo} alt="Pokelogo" />
            <div></div>
        </header>
        <div className="clear"></div>
    </>
);

export default connect()(Header);
