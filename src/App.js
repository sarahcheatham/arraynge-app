import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SignInSignUpPage from './components/SignInSignUpPage';
import NewUserDataPage from './components/NewUserDataPage';
import ClassDataPage from './components/ClassDataPage';

class App extends Component {
  constructor(){
    super();
    this.state={
        isClicked: false,
        isLoggedIn: false,
    }
    this.handleSignupClick = this.handleSignupClick.bind(this);
  };

  handleSignupClick(e){
    e.preventDefault();
    console.log(e)
    this.setState({isClicked: true})
  }
 

  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Navbar/>
            <div className="page">
              <Switch>
                <Route path="/signup" component={NewUserDataPage}/>
                <Route path="/classdata" component={ClassDataPage}/>
                <Route path='/' component={SignInSignUpPage}/>
              </Switch>
            </div>
            {/* <Footer/> */}
          </div>
        </BrowserRouter>
      ); 
    }
  }

export default App;

