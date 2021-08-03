import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Home from './Pages/Home2/Home2';

ReactDOM.render(
  <BrowserRouter>
    <div>

      <Switch>
        <Route exact path= '/' component={App} />
        <Route path='/home' component={Home} />
      </Switch>
      
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);