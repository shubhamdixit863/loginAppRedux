import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';

class App extends Component {
  render() {
    return (

      <Router>
  <Switch>
          <Route path="/login">
            <Login />
          </Route>
       
        </Switch>



        
      </Router>
     
    );
  }
}

export default App;
