import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SignUpSignInPage from './components/SignUpSignInPage';
import NewUserDataPage from './components/NewUserDataPage';
import ClassDataPage from './components/ClassDataPage';

class App extends Component {
  constructor(){
    super();
    this.state={
      signUpSignInError: "",
      authenticated: localStorage.getItem("token") || false
    }
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  };

  handleSignUp(credentials){
    const { username, password, confirmPassword } = credentials;
    if(!username.trim() || !password.trim()){
      this.setState({
        signUpSignInError: "Must provide all fields."
      });
    } else {
      fetch("/api/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res)=>{
        return res.json();
      }).then((data)=>{
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
    }
  }

  handleSignIn(credentials) {
    // Handle Sign Up
    const { username, password } = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {

      fetch("/api/sessions", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        return res.json();
      }).then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          authenticated: token
        });
      });
    }  
  }

  handleSignOut(){
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  }

  renderSignUpSignIn(){
    return(
      <SignUpSignInPage
        error={this.state.signUpSignInError}
        onSignUp={this.handleSignUp}
        onSignIn={this.handleSignIn}
      />
    )
  }

  renderApp(){
    return(
      <div className="page">
        <Switch>
          <Route path="/signup" component={NewUserDataPage}/>
          <Route path="/classdata" component={ClassDataPage}/>
          <Route path='/' component={SignUpSignInPage}/>
        </Switch>
      </div>
    )
  }
 
  render() {
    let whatToShow = "";
    if(this.state.authenticated){
      whatToShow = this.renderApp();
    } else {
      whatToShow = this.renderSignUpSignIn();
    }
      return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Navbar/>
            <div className="page">
              {whatToShow}
             </div>
          </div>
        </BrowserRouter>
      ); 
    }
  }

export default App;

