import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store, { subscribe } from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderDOM = (state) =>{
  root.render(
    <React.StrictMode>
      <App appState={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};
rerenderDOM(store.getState());
store.subscribe(rerenderDOM);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

