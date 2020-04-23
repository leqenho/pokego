import api from './api';

const getPaginatedPokemons = () => {
    api.get(`pokemon?limit=3`)
        .then(({ data }) => data);
}

export default getPaginatedPokemons;
