import React, { useEffect, useState } from 'react';
import logo from './assets/image/logo.svg';
import api from './services/api';

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const limit = '?limit=721'

	useEffect(() => {
		api.get(`pokemon/${limit}`)
			.then(({ data }) => (
				// eslint-disable-next-line
				data.results.map(({ name }) => {
					api.get(`pokemon/${name}`)
						.then(({ data }) => {
							const { id, name, sprites, types } = data;
							const { front_default } = sprites;
							setPokemons(pokemons => [...pokemons, { id, name, front_default, types }]);
						})
						.catch(err => {
							alert("Ops! Não consegui encontrar o pokemon.");
						});

					setLoading(false);
				})
			))
			.catch(err => {
				alert("Ops! Não foi possivel encontrar nenhum pokemon, tente mais tarde.");
			});
	}, []);
	return (
		<>
			<header style={{ padding: 15 }}>
				<img
					src={logo}
					alt="Pokelogo"
					style={{
						width: 50,
						height: 50,
						display: 'block',
						margin: '0 auto'
					}}
				/>
			</header>
			<div hidden={loading} className="container direction-column">
				<main>
					<ul
						id="pokegrid"
						className="pokegrid"
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'space-around',
							alignItems: 'center'
						}}
					>
						{pokemons.map(({ id, name, front_default, types }) => (
							<li
								key={id}
								className="pokegrid__item"
								style={{
									background: '#fff',
									width: 180,
									padding: 8,
									margin: 8,
									border: '1px solid #ccc'
								}}
							>
								<figure
									style={{
										margin: '0 auto',
										width: 96,
										height: 96,
										borderRadius: '50%',
										backgroundColor: '#e9e9e9'
									}}
								>
									<img
										src={front_default}
										alt={name}
										className="pokegrid__item__thumbnail"
									/>
								</figure>
								<h4
									className="pokegrid__item__title"
									style={{
										textAlign: 'center',
										textTransform: 'capitalize',
										marginBottom: 8,
										marginTop: 8
									}}
								>
									{name}
								</h4>
								<ul
									className="pokegrid__item__types"
									style={{
										display: 'flex',
										justifyContent: 'center'
									}}
								>
									{types.map(({ slot, type }) => (
										<li
											key={slot}
											className={`pokegrid__item__types__type ${type.name}`}
											style={{
												order: `${slot}`,
												padding: '4px 8px',
												margin: '4px 8px',
												textTransform: 'capitalize',
												borderRadius: 3,
											}}
										>
											{type.name}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</main>
			</div>
			<h1 hidden={!loading}>Carregando...</h1>
		</>
	);
}

export default App;
