import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from './components/Logo'
import LoginBtn from './components/btns/LoginBtn'
import SeekBtn from './components/btns/SeekBtn'
import VolBtn from './components/btns/VolBtn'

class Login extends Component{


  render(){
    return(
        <div className = "container">
            <h1>Pledge</h1>
            <Logo />
            <Link to = "/login">
            <LoginBtn />
            </Link>

          <p className = "index-text">Or Sign up As</p>


            <Link to = "/volSignup">
              <VolBtn />
            </Link>


            <Link to = "/seekSignup">
              <SeekBtn />
            </Link>


        </div>
    )
  }
}


export default Login;
