import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './styles.scss';

export default function AllPokemons() {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		api.get('pokemon?limit=10')
			.then(({ data }) => {
				setPokemons(data.results);
			})
			.catch(err => {
				alert(`Falha ao reconhecer pokemons. ${err}`);
			})
	}, []);

	return (
		<>
			<ul>
				{pokemons.map(pokemon => (
					<li>
						<a href="#">
							{pokemon.name}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}
