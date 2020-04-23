import React from 'react';
import { IoMdMenu } from 'react-icons/io/';
import { MdShortText } from 'react-icons/md/';

import './styles.scss';

export default function Aside() {
    return (
        <nav id="Aside" >
            <div className="topbar__aside">
                <button className="btn__aside" >
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
