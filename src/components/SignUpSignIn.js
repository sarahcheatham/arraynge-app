import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Tabs, Tab, Row, Col, Alert } from 'react-bootstrap';
import SignUp1 from "./SignUp1";
import SignIn1 from "./SignIn1";

class SignUpSignIn extends Component{
    renderError(){
        return(
            <Alert bsStyle="danger">
                <strong>{this.props.error}</strong>
            </Alert>
        );
    }

    render(){
        return(
            <Row>
                <Col xs={8} xsOffset={2}>
                    {this.props.error && this.renderError()}
                    <Tabs defaultActiveKey={1} id="signup-signin-tabs">
                        <Tab eventKey={1} title="Sign Up">
                            <SignUp1 onSignUp={this.props.onSignUp}/>
                        </Tab>
                        <Tab eventKey={2} title="Sign In">
                            <SignIn1 onSignIn={this.props.onSignIn}/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        )
    }
}

SignUpSignIn.propTypes={
    error: PropTypes.string,
    onSignUp: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired
};

export default SignUpSignIn;