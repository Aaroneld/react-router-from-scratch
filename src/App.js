import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import About from './about';
import Home from './home';
import CustomRoute from './route';

function App(props) {

  return (
    <div className="App">
      
      <CustomRoute path="/">
        <Home />
      </CustomRoute>
      <CustomRoute path="/about/:id">
        <About />
      </CustomRoute>
    </div>
  );
}

export default App;
