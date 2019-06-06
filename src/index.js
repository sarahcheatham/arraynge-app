import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import "./index.css";
import store from "./store/store";
import { Provider } from 'react-redux';


const oldFetch = window.fetch;
window.fetch = (url, settings = {}) => {
  return oldFetch(url, 
    {...settings,
      headers: {...settings.headers, authorization: localStorage.getItem("token")}
    }
    );
};



ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
