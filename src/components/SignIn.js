import React, {Component} from "react";
import Required from './Required';
import Star from './Star';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false
        };
    }

    validateForm(){
        let isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn === true){
            console.log(true)
            return this.state.email.length > 0 && this.state.password.length > 0;
        } console.log(false)
    };

    handleChange = (event)=>{
        return event.target.id === 'email' ? this.setState({email: event.target.value}) : this.setState({password: event.target.value})
    };

    render(){
        
        return(
            <div className="login">
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <legend className="loginLegend">Sign In</legend>
                    <Required className='required'/>
                    <label className="email">
                        Email Address<Star/><br/>
                        <input
                            autoFocus
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="pwd">
                        Password<Star/> <br/>
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    {/* <span className="box">
                        <span className="overlay">
                        </span>
                        <LoginButton onClick={(e)=>{this.handleLoginClick(e)}} onSubmit={this.validateForm} className="loginButton"/>
                        {/* <button
                        disabled={!this.validateForm()}
                        type="submit"
                        className="loginButton"
                        >
                            LOGIN
                        </button> */}
                    {/* </span> */}
                </form>
            </div>
        );
    }
}