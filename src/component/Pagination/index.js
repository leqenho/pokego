import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa/";

import './styles.scss';

export default function Pagination() {
    return (
        <div className="pagination">
            <button
                className="btn left"
                disabled={previous === null}
                onClick={() => setOffset(offset => offset - limit)}
            >
                <FaAngleLeft size={25} />
            </button>
            <button
                className="btn right"
                disabled={next === null}
                onClick={() => setOffset(offset => offset + limit)}
            >
                <FaAngleRight size={25} />
            </button>
        </div>
    );
}
