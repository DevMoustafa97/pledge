import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Back from "../components/btns/Back"
class Login extends Component{


  render(){
    return(
        <div className = "container">
        
        
        
                <h1 className = "login-text">Log in</h1>
                <form className = "form" method = "get">

                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email" className = "input" required/>
                    <br/>
                <label htmlFor="password" >Password</label><br/>
                <input type= "password" id="password" name="password" className = "input" required/>
                    <br/><br/>
                 <Link to = "/profile">
                <input type="submit" value="Log in" className= "btn"/>
                  </Link>
                </form>
        




        <Link to = "/">
        <Back/>
        </Link>
        </div>
    )
  }
}


export default Login;
