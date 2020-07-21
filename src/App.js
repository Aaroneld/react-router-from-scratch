import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import About from './about';
import Home from './home';
import CustomRoute from './route';

function App() {
  return (
    <div className="App">

      {/* <CustomRoute path="/" component={Home} /> */}
      <CustomRoute path="/" component={Home} />
    
      <Switch>
        
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
