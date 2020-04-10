import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import AllPokemons from './pages/AllPokemons';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ AllPokemons } />
            </Switch>
        </BrowserRouter>
    )
};
