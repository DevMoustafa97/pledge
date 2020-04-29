import React, {Component} from 'react';
import icon from './imgs/user.png';

class UserPhoto extends Component{


  render(){
    return(
        <img className = "userImg" src={icon} alt="user"/>
    )
  }
}


export default UserPhoto;
