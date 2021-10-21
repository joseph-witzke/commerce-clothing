import React from 'react';
import { Switch, Route } from 'react-router-dom';

//STYLES
import './App.css';

//COMPONENTS
import Homepage from './pages/homepage/Homepage';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
