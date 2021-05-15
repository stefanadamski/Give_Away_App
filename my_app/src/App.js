import React from "react";
import Home from './components/Home.js'
import Login from "./components/Login";
import Register from "./components/Register";
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
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </Router>
  );
}

export default App;


