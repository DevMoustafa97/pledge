import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//components

// pages
import Home from './Home'
import Login from './pages/Login'
import VolSignup from './pages/VolSignup'
import SeekSignup from './pages/SeekSignup'
import Profile from './pages/Profile'
import BottomBar from './components/BottomBar'
import TopBar from './components/TopBar'
import Wall from './pages/Wall'
import './App.css';


class App extends Component{
 

  render(){
    return(
      // <Wall />
        // <TopBar />


    //  <Profile />


      <Router>
            <Switch>
          <div className="App ">
              <Route path = "/" exact component = {Home}/>  
              <Route path = "/home" exact component = {Home}/>  
              <Route path = "/login" exact component = {Login}/>  
              <Route path = "/volSignup" exact component = {VolSignup}/>  
              <Route path = "/seekSignup" exact component = {SeekSignup}/>  
              
              <Route path = "/profile" exact component = {Profile}/>  
              <Route path = "/wall" exact component = {Wall}/>  
          </div>
            </Switch> 
          
    </Router>
    )
  }
}


export default App;
