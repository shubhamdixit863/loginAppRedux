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
import Header from './components/Header';
import Home from './components/Home';
import ProtectedRoutes from './authorization/ProtectedRoutes';

class App extends Component {
  render() {
    return (

      <Router>

        <Header/>
  <Switch>
          <Route exact path="/">
            <Login />
          </Route>
       
        

         

          <ProtectedRoutes exact path="/home" component={Home}  role={"admin"} />

        </Switch>



        
      </Router>
     
    );
  }
}

export default App;
