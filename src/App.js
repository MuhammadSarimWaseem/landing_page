import React from 'react';

import { Footer, Features, WhatisAI, Header } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatisAI />
    <Features />
    <Footer />
  </div>
);

export default App;