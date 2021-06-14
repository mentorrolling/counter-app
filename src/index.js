import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <CounterApp valor={0}/>
  </React.StrictMode>,
  document.getElementById('root')
);


