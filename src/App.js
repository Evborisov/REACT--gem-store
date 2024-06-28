import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/Product_list';
import Collections from './components/Collections';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import OurCompany from './components/OurCompany';
import Home from './components/Home';
import Default from './components/Default';
import Details from './components/Details';





function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/shop" component={ProductList}></Route>
        <Route path="/collections" component={Collections}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/contact" component={ContactUs}></Route>
        <Route path="/about" component={OurCompany}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/details" component={Details}></Route>
        <Route component={Default}></Route>
      </Switch>


    </React.Fragment>
  );
}

export default App;
