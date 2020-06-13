import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Person } from './util';

const showLog = (data: any) => console.log('custom log:', data);

const daddy: Person = {
  name: 'Ben',
  age: 45,
};

showLog(daddy);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
