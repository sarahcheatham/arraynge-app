import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SignUpSignInPage from './components/SignUpSignInPage';
import ClassDataPageContainer from './containers/ClassDataPageContainer';
import Secret from './components/Secret';
import TopNavbar from './components/TopNavbar';
import WelcomePage from './components/WelcomePage';
import ArrayngementPage from './components/ArrayngementPage';
import StudentDataPage from './components/StudentDataPage';
import StudentDataPageContainer from './containers/StudentDataPageContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      signUpSignInError: "",
      authenticated: localStorage.getItem("token") || false,
      userId: "",
      subject: "",
      gradelevel: ""
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  };

  handleSignUp(credentials){
    const { username, password, confirmPassword } = credentials;
    console.log(credentials)
    if(!username.trim() || !password.trim()){
      this.setState({
        signUpSignInError: "Must Provide All Fields"
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
    console.log(credentials)
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
  //   if(this.state.authenticated === "token"){
  //      event.target.innerHTML = "Sign In"
  //   } else {
  //     event.target.innerHTML = "Sign Out"
  //   }
  //   console.log(event.target.innerHTML)
  // }

  renderError(){
    return(
        <Alert bsStyle="warning">
            <strong className="signupsigninerr">{this.props.err}</strong>
        </Alert>
    )
  }
  renderSignUpSignIn() {
    return (
      <Switch>
        <Route
          path='/'
          render={(props)=> <SignUpSignInPage {...props} err={this.state.signUpSignInError} onSignUp={this.handleSignUp} onSignIn={this.handleSignIn} error={this.renderError}/>}
        />
      </Switch>
    );
  }

  renderApp(){
    return(
      <div className="page">
        <Switch>
          <Route exact path="/" render={()=> <WelcomePage/>}/>
          {/* <Route path="/studentdata" component={StudentDataPage}/> */}
          <Route path="/studentdata" component={StudentDataPageContainer}/>
          <Route path="/classdata" component={ClassDataPageContainer}/>
          {/* <Route exact path="/classdata" render={(props)=> <ClassDataPageContainer gradelevel={props.gradelevel} subject={props.subject} userId={props.userId} classdata={props.classdata}/>}/> */}
          <Route path="/arrayngement" component={ArrayngementPage}/>
          <Route exact path="/secret" component={Secret}/>
        </Switch>
      </div>
    )
  }
 
  render() {
    let whatToShow = "";
    console.log()
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
            <TopNavbar
              showNavItems={this.state.authenticated} 
              onSignOut={this.handleSignOut}
            />
            <div className="page">
              {whatToShow}
             </div>
          </div>
        </BrowserRouter>
      ); 
    }
  }

export default App;

