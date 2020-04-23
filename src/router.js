import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import PaginatedPokemons from './pages/PaginatedPokemons';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ PaginatedPokemons } />
            </Switch>
        </BrowserRouter>
    )
};
