import React, { useContext } from 'react';

import logo from '../../assets/image/';
import { IoMdMenu } from 'react-icons/io/';
import "./styles.scss";

import { OpenContext } from '../../App';

export default function Header() {
    const [open, setOpen] = useContext(OpenContext);
    return (
        <>
            <header id="Header" onClick={() => setOpen(!open)} >
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
}
