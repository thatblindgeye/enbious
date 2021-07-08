import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import Shop from '../Pages/Shop';
import NoMatch from '../Pages/NoMatch';
import ItemDetails from '../Pages/ItemDetails';

export default function Router() {
  return (
    <main aria-live='polite'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/shop/:id' component={ItemDetails} />
        <Route path='/cart' component={Cart} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  );
}
