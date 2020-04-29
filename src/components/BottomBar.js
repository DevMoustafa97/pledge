import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Back from "../components/btns/Back"

class BottomBar extends Component{


  render(){
    return(
        <div className = "bottom-bar">
            <Link to = "/">
              <i className="fas fa-sign-out-alt black"></i>
            </Link>
            <Link to = "/wall">
              <div>

              <i className="fas fa-home black"></i>
              </div>
            </Link>

              <i className="fas fa-cog"></i>
          </div>  




        )
  }
}


export default BottomBar;
