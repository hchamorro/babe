import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop';
import About from './pages/About';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import News from './pages/News';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { UserProvider } from './utils/context/UserContextHc';
import { CartProvider } from './utils/context/CartContextHc';
import './assets/babe.css';
import Checkout from './pages/Checkout';

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
            <Route exact path={['/news']} component={News} />
            <Route exact path={['/login']} component={Login} />
            <Route exact path={['/signup']} component={SignUp} />

            <Route path={['/shop/:id']} component={Products} />
            <Route exact path={['/checkout']} component={Checkout} />

            {/* footer */}
            <Footer />
          </CartProvider>
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
