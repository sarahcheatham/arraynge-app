import React, {Component} from "react";
import PropTypes from 'prop-types';
import { FormControl, Button } from 'react-bootstrap';
// import Required from './Required';
import Star from './Star';

//this is the old login component
class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onSignIn({
            username: this.state.username,
            password: this.state.password
        });
    }

    render(){
        // console.log('PROPS: ', this.props)
        return(
            <div className="login">
                <form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
                    <legend className="loginLegend">SIGN IN</legend>
                    {/* <Required className='required'/> */}
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
                            id="email"
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
                            id="password"
                        />
                    </label>
                    <Button type="submit" className="signinButton">
                        SIGN IN
                    </Button>
                </form>
            </div>
        );
    }
}

SignIn.propTypes ={
    onSignIn: PropTypes.func.isRequired
};

export default SignIn;