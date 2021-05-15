import React from "react";
import './css/Home.css';
import Home from './components/Home.js'
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
          <Route path="/location" component={Location} />
        </Switch>
      </Router>
  );
}

export default App;


