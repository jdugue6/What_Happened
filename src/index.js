import App from './App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Components/Home';
// import Login from './components/Login';


const defaultState= { 
  appName: 'what_happened',
  articles: null
};

const reducer= function(state = defaultState, action) {
   return state;
  };
  
const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
   <BrowserRouter>
       <Route path="/" component={Home}>
          {/* <Route path="login" component={Login} /> */}
          </Route>
   </BrowserRouter> 
  </Provider>
), document.getElementById('root'));