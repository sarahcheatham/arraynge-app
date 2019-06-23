import React, {Component} from "react";
import PropTypes from 'prop-types';
import { FormControl, Button } from 'react-bootstrap';
import Star from './Star';
// import NewUserButton from './NewUserButton';
// import Required from './Required';

class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
        };
    }
    // checkPasswordsMatch(value){
    //     let match = this.state.password === this.state.confirmPassword;
    //     if(!match){
    //         this.setState({checkPasswordsMatch: false})
    //     }
    //     this.setState({checkPasswordsMatch: true})
    // }

    handleSubmit(event){
        // console.log('FORM: ', event)
        event.preventDefault();
        this.props.onSignUp({
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });  
    }

    render(){
        // console.log('PROPS: ', this.props)
        return(
            <div className="signup">
                <form className="signupForm" onSubmit={this.handleSubmit.bind(this)}>
                    <legend className="signupLegend">CREATE AN ACCOUNT</legend>
                    {/* <Required className='required'/> */}
                    <label className="userFirstName">
                        First Name<Star/><br/>
                        <FormControl
                            type="text"
                            name="firstName"
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            placeholder="Enter First Name"
                            value={this.state.firstName}
                            id="firstName"
                        />
                    </label>
                    <label className="userLastName">
                        Last Name<Star/><br/>
                        <FormControl
                            type="text"
                            name="lastName"
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            placeholder="Enter Last Name"
                            value={this.state.lastName}
                            id="lastName"
                        />
                    </label>
                    <label className="signupemail">
                        Email Address<Star/><br/>
                        <FormControl
                            type="email"
                            name="username"
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            placeholder="Enter Username"
                            value={this.state.username}
                            id="email2"
                        />
                    </label>
                    <label className="signuppwd">
                        Password<Star/> <br/>
                        <FormControl
                            type="password"
                            name="password"
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            placeholder="Enter Password"
                            value={this.state.password} 
                            id="pwd2"  
                        />
                    </label>
                    <label className="confirmpwd">
                        Confirm Password<Star/>
                        <FormControl
                            type="password"
                            name="confirmPassword"
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            placeholder="Confirm Password"
                            value={this.state.confirmPassword}
                            id="pwd3"
                        />
                    </label>
                    <Button type="submit" className="signupButton">
                        CREATE AN ACCOUNT
                    </Button>
                </form>
            </div>
        );
    }
}

SignUp.propTypes = {
    onSignUp: PropTypes.func.isRequired
};
export default SignUp
