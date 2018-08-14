import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Saved from "./pages/Saved"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = () => (
  
  
  <Router>
    <div className="Container">
      <Header />

      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Home} />
      <Route path="/saved" component={Saved} /> 
      </Switch>

      <Footer />
    </div>

  </Router>
);

export default App;
