import React, {Component} from "react";
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

export default class SignInSignUpPage extends Component{
    constructor(props){
        super(props);
        this.state={
            isClicked: false,
            isLoggedIn: false,
        }

        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleSignupClick(e){
        e.preventDefault();
        console.log(e)
        this.setState({isClicked: true})
    }
    handleLoginClick(e){
        e.preventDefault();
        console.log(e)
        this.setState({isLoggedIn: true})
      }
    render(){

        return(
            <div className="loginPage">
                <SignIn/>
                <SignUp/>
                <div className='buttonBox'>
                    <SignInButton onClick={(e)=>{this.handleLoginClick(e)}} className="loginButton"/>
                    <SignUpButton className='signupButton' onClick={(e)=>{this.handleSignupClick(e)}}/>   
                </div>
            </div>
        )
    }
}
