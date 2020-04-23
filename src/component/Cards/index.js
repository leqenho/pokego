import React from 'react';

import './styles.scss';

const Cards = ({ pokemon }) => {
    const { name, sprites, types } = pokemon;
    const { front_default } = sprites;
    return (
        <li>
            <img src={front_default} alt={name} />
            <p>{name}</p>
            {types.map(({ slot, type }) => (
                <span
                    className={`type_tag ${type.name}`}
                    key={slot}
                    style={{ order: { slot } }}>
                    {type.name}
                </span>
            ))}
        </li>
    );
}

export default Cards;
