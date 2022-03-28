import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import NotFound from './components/NotFound/NotFound';
import Header from "./components/Header/Header";
import Home from './components/Home/Home/Home';
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login/Login";
import JoinUs from "./components/Auth/JoinUs/JoinUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <AuthProvider>
      <Router>

        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/home'>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path='/join-us'>
            <JoinUs></JoinUs>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/about-us'>
            <Header></Header>
            <AboutUs></AboutUs>
            <Footer></Footer>
          </Route>
          <Route path='/blogs'>
            <Header></Header>
            <Blogs></Blogs>
            <Footer></Footer>
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
