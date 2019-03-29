import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import Header from './components/Header';
import TopNavbar from './components/TopNavbar';
import SignUpSignInPage from './components/SignUpSignInPage';
import WelcomeContainer from './containers/WelcomeContainer';
import ScoresPageContainer from './containers/ScoresPageContainer';
import ClassDataPageContainer from './containers/ClassDataPageContainer';
import StudentDataPageContainer from './containers/StudentDataPageContainer';
import ArrayngementPageContainer from './containers/ArrayngementPageContainer';
import BarChartContainer from './containers/BarChartContainer';

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

  componentDidMount(){
    if(this.state.authenticated){
      this.props.loadUserId();
    }
  }
  
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
        this.props.loadUserId();
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
        this.props.loadUserId();
      });
    }  
  }

  handleSignOut(event){
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
    this.props.setCurrentUserId(null);
  }

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
          <Route exact path="/" component={WelcomeContainer}/>
          <Route path="/studentdata" component={StudentDataPageContainer}/>
          <Route path="/classdata" component={ClassDataPageContainer}/>
          {/* <Route exact path="/classdata" render={(props)=> <ClassDataPageContainer gradelevel={props.gradelevel} subject={props.subject} userId={props.userId} classdata={props.classdata}/>}/> */}
          <Route path="/arrayngement" component={ArrayngementPageContainer}/>
          <Route exact path="/scores" component={ScoresPageContainer}/>
          <Route path="/charts" component={BarChartContainer}/>
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

