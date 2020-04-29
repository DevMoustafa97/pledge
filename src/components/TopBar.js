import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TopBar extends Component{


  render(){
    return(
        <div className = "top-bar">
          <Link to = "/profile">
              <i className="fas fa-user black"></i>
          </Link>
              <h6 className = "black">User Name</h6>
          <Link to = "/">
            <i className="fas fa-sign-out-alt black"></i>
          </Link>

        </div>  





        )
  }
}


export default TopBar;
