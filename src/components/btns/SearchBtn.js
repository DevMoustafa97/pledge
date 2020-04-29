import React, {Component} from 'react';

class SearchBtn extends Component{
    constructor(props){
        super(props)
    }

  render(){
    return(
    <button  className = "btn" to = "login" >Find {this.props.search}</button>
    )
  }
}


export default SearchBtn;
