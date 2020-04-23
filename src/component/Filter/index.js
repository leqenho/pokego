import React from 'react';

import './styles.scss';

export default function Filter() {
    return (
        <select onChange={({ target }) => setLimit(target.value)}>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
    );
}
