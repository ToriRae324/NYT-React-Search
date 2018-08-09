import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Home from "./pages/Home"


const App = () => (
  <div>
  <Header />
  
  <Home />

  <Footer />
  </div>
);

export default App;
