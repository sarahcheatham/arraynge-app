import React, {Component} from "react";
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Alert } from 'react-bootstrap';

class SignUpSignInPage extends Component{
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
                {this.props.error && this.renderError()}
                <SignIn onSignIn={this.props.onSignIn} />
                <SignUp onSignUp={this.props.onSignUp} />
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
