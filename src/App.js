import React, { Component } from 'react'
import './Register/register.css'
import fire from './config/fire';
import Login from './Login'
import Register from './Register/Register'



class App extends Component {

  constructor(props){
    super(props); 
    this.state = {
      user : null
      
    };

   this.authListener = this.authListener.bind(this);
  }

  
  componentDidMount()
  {
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){

        this.setState({user})
      }
    

     else{
       this.setState({user : null})
          
      }
    })
  }

 
  render() {
    return (
      <div className= "App" >
        {this.state.user ? (<Register/>) : (<Login/>)}
        

      </div>
    )
  }
}



 

export default App;
