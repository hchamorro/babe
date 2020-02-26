import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import About from './pages/About';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wellness from './pages/Wellness';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/']} component={Home} />
        <Route exact path={['/products']} component={Products} />
        <Route exact path={['/about']} component={About} />
        <Route exact path={['/cart']} component={Cart} />
        <Route exact path={['/wellness']} component={Wellness} />
        <Route exact path={['/news']} component={News} />



      </Switch>
    </Router>
  );
}

export default App;
