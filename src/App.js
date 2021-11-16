import React from 'react';
import { Switch, Route } from 'react-router-dom';

//STYLES
import './App.css';

//COMPONENTS
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
