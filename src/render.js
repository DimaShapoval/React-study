import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderDOM = (state) =>{
  root.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost}/>
    </React.StrictMode>
  );
}