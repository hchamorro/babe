import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop';
import About from './pages/About';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Wellness from './pages/Wellness';
import News from './pages/News';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { UserProvider } from './utils/context/UserContextHc';
import { CartProvider } from './utils/context/CartContextHc';
import './assets/babe.css';

function App() {
  return (
    <Router>
      <Switch>
        <UserProvider>
          <CartProvider>
            {/* logo header */}
            <Header />
            {/* nav bar */}
            <Nav />

            {/* body of pages */}
            <Route exact path={['/']} component={Home} />
            <Route exact path={['/shop']} component={Shop} />
            <Route exact path={['/about']} component={About} />
            <Route exact path={['/cart']} component={Cart} />
            <Route exact path={['/wellness']} component={Wellness} />
            <Route exact path={['/news']} component={News} />
            <Route path={['/shop/:id']} component={Products} />

            {/* footer */}
            <Footer />
          </CartProvider>
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
