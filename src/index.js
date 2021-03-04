import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom'
import './index.css'; 

import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={Home}/>
        <Route/>
      </Switch>
    </HashRouter>
  );
}

export default App;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
