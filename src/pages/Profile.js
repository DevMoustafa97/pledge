import React, {Component} from 'react';
import UserPhoto from '../components/UserPhoto'
import SearchBtn from '../components/btns/SearchBtn'
import BottomBar from '../components/BottomBar'
import UserInfo from '../components/UserInfo'
class Profile extends Component{


  render(){
    return(
    <div>
            <div className = "orange-space"></div>
            <UserPhoto />
            <div className = "content">
              <h2>User Name</h2>
                <UserInfo />
                <BottomBar />
            </div>

            






        
        </div>
    )
  }
}


export default Profile;
