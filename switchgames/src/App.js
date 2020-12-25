import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
// rourter dom - for ching paigs
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";




function App() {
  return (
    // BEM
    <Router>
      <div className="App">
      <Header />
      <Switch>
      {/* checkout route */}
         <Route path="/checkout">
          <Checkout/>
          </Route>
       {/*  default route */}
         <Route path="/">
          <Home /> 
          </Route>
    </Switch>
    

    </div>
    </Router>
  );
}

export default App;
