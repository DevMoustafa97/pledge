import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Back from "../components/btns/Back"

class VolSignup extends Component{
 




  
  render(){
    
    return(

        <div className = "container">
        <h1>Sigun up as Volunteer</h1>

          
        <form className = "form" onSubmit={this.addVol} id = "volSignup">
                <label htmlFor = "fname">First Name </label><br/>
                <input type="text" id="fname" name="fname" className = "input" required/>
                    <br/>
                <label htmlFor="lname" >Last Name</label><br/>
                <input type= "text" id="lname" name="lname" className = "input" required/><br />
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email" className = "input" required/>
                    <br/>
                <label htmlFor="password" >Password</label><br/>
                <input type= "password" id="password" name="password" className = "input" required/>
                <label htmlFor="cpassword">Confirm Password</label><br/>
                <input type="password" id="cpassword" name="cpassword" className = "input" required/>
                    <br/>
                <label htmlFor="age" >Age</label><br/>
                <input type= "number" id="age" name="age" className = "input" required/>
                <label htmlFor="pnum" >Phone Number</label><br/>
                <input type= "number" id="pnum" name="pnum" className = "input" required/>
                    <br/><br/>
                    <Link to = "/">
                <input type="submit" value="Sign up" className= "btn" />
                    </Link>
          </form>




        <Link to = "/">
        <Back/>
        </Link>
        </div>

        )
  }
}


export default VolSignup;
