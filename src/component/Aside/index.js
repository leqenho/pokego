import React, { useContext } from 'react';
import { IoMdMenu } from 'react-icons/io/';
import { MdShortText } from 'react-icons/md/';

import './styles.scss';

import { OpenContext } from '../../App'

export default function Aside() {
    const [open, setOpen] = useContext(OpenContext);
    return (
        <nav id="Aside" className={open ? ('open') : ('close')}>
            <div className="topbar__aside">
                <button className="btn__aside" onClick={() => setOpen(!open)}>
                    <IoMdMenu size={35} />
                </button>
            </div>
            <ul className="navigation">
                <li className="navigation__item">
                    {/* eslint-disable-next-line */}
                    <a href="#" >
                        <MdShortText size={35} />
                        <span>
                            Text Link
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
