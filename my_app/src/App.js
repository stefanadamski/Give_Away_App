import React from "react";
import Home from './components/Home'
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
      </Router>
  );
}

export default App;


