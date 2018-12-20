import React, {Component} from "react";
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import { Alert } from 'react-bootstrap';

class SignUpSignInPage extends Component{
    constructor(){
        super();
    }
    renderError(){
        return(
            <Alert bsStyle="danger">
                <strong>{this.props.error}</strong>
            </Alert>
        )
    }
    render(){

        return(
            <div className="loginPage">
                {/* <SignIn/> */}
                {this.props.error && this.renderError()}
                <SignUp onSignUp={this.props.onSignUp} />
                <SignIn onSignIn={this.props.onSignIn} />
                {/* <div className='buttonBox'> */}
                    {/* <SignInButton onClick={(e)=>{this.handleLoginClick(e)}} className="loginButton"/>
                    <SignUpButton className='signupButton' onClick={(e)=>{this.handleSignupClick(e)}}/>    */}
                {/* </div> */}
            </div>
        )
    }
}

SignUpSignInPage.propTypes = {
    error: PropTypes.string,
    onSignUp: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired
}

export default SignUpSignInPage;
