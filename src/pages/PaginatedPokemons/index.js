import React from 'react';

import './styles.scss';
import { connect } from 'react-redux';

const PaginatedPokemons = (props) => {
	debugger
	return (
		<>
			<h3 className="Pokelist">
				Paginated Pokemons
			</h3>

			<p>
				Huehuehue
			</p>
		</>
	);
}

const mapStatetoProps = state => ({ paginatedPokemons : state });

export default connect(
	mapStatetoProps,
)(PaginatedPokemons);
