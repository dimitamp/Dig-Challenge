import React from 'react';
import {
 Route, Switch, Redirect
} from 'react-router-dom';

import ProductsScreen from '../product-list';
import ProductScreen from '../product';


export const Component = () => (
  <Switch>
    <Route
      exact
      path="/products"
      component={ProductsScreen}
    />
    <Route
      path="/products/:id"
      component={ProductScreen}
    />
    <Redirect from="*" to="/products" />
  </Switch>
);


export default Component;
