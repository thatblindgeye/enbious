import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Shop from '../Pages/Shop';
import NoMatch from '../Pages/NoMatch';
import Item from '../Pages/Item';

export default function Router() {
    return (
        <main id='main' aria-live='polite'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/shop/:itemId' component={Item} />
                <Route path='/cart' component={Cart} />
                <Route component={NoMatch} />
            </Switch>
        </main>
    );
}
