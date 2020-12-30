import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
// rourter dom - for ching paigs
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Login";




function App() {
  return (
    // BEM
    <Router>
      <div className="App">
     
      <Switch>
      {/* checkout route */}
         <Route path="/checkout">
         <Header />
          <Checkout/>
          </Route>
      {/* Login route */}
         <Route path="/Login">
          <Login />
          </Route>
       {/*  default route */}
         <Route path="/">
         <Header />
          <Home /> 
          </Route>
    </Switch>
    

    </div>
    </Router>
  );
}

export default App;
