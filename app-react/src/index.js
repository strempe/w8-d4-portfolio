import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route } from 'react-router'
import './components/css/global.css';
import Portfolio from './components/Portfolio'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'





ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Portfolio}></Route> 
    <Route path='/work' component={Work}></Route> 
    <Route path='/about' component={About}></Route>    
    <Route path='/contact' component={Contact}></Route>     
     
  </Router>,
  document.getElementById('root')
);
