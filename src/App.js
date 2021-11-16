import React from 'react';
import { Switch, Route } from 'react-router-dom';

//STYLES
import './App.css';

//COMPONENTS
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Login from './pages/sign-in-sign-up/Login';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
