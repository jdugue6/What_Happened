import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import App from './Components/App';
import Home from './Components/Home';
import Login from './Components/Login/Login';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { createStore } from 'redux';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();


const defaultState= { 
  appName: 'Joey Dugue',
  
};

const reducer= function(state = defaultState, action) {
   return state;
  };
  
const store = createStore(reducer);

ReactDOM.render((
  <Provider store={store}>
   <BrowserRouter>
     <div>
        <App/>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          {/* {<Route path="/register" component={Register}/>} */}
     </div>
   </BrowserRouter> 
  </Provider>
), document.getElementById('root'));