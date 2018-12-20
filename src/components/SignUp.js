import React, {Component} from "react";
import Required from './Required';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Star from './Star';
import NewUserButton from './NewUserButton';
import SubHeader from './SubHeader';

class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleSubmit(e){
        console.log('FORM: ', e)
        e.preventDefault();
        this.props.onSignUp({
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        });
    }

    render(){
        console.log('PROPS: ', this.props)
        return(
            <div className="signup">
                <form className="signupForm" onSubmit={this.handleSubmit.bind(this)}>
                    <legend className="signupLegend">Sign Up</legend>
                    <Required className='required'/>
                    <label className="email">
                        Email Address<Star/><br/>
                        <FormControl
                            type="email"
                            name="username"
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            placeholder="Enter Username"
                            value={this.state.username}
                        />
                    </label>
                    <label className="pwd">
                        Password<Star/> <br/>
                        <FormControl
                            type="password"
                            name="password"
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            placeholder="Enter Password"
                            value={this.state.password}   
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
                        />
                    </label>
                    <button type="submit" className="signupButton">
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
}

SignUp.propTypes = {
    onSignUp: PropTypes.func.isRequired
};
export default SignUp
// import React, {Component} from "react";

// export default class SignUp extends Component {
//     render(){
//         return(
//             <div className="signup">
//                 <h2 className="signupHeader">CREATE AN ACCOUNT</h2>
//                 <p className="signupText">Creating an account is super easy. <br/>Just click below to get started.</p>
//             </div>
//         )
//     }
// }