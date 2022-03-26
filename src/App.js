import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import NotFound from './components/NotFound/NotFound';
import Header from "./components/Header/Header";
import Home from './components/Home/Home/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>


          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
