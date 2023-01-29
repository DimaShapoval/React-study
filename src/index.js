import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import State from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
// let dialogsData = [
//   { id: 1, name: "Anton" },
//   { id: 2, name: "Dmytro" },
//   { id: 3, name: "Nastya" }
// ];
// let messageData = [
// { id: 1, message: "Hi" },
// { id: 2, message: "How are you?" },
// { id: 3, message: "Are you here?" },
// ];
// let posts = [
//   {content: "Hi lol", likesCount: 1},
//   {content: "I am freedom", likesCount: 25},
//   {content: "Dmytro I love you", likesCount: 34},
//   {content: "I am a Front-end developer", likesCount: 1.2 + "m"},
//   {content: "I am a Front-end developer", likesCount: 1.2 + "m"},
//   {content: "I am a Front-end developer", likesCount: 1.2 + "m"},
//   {content: "I am a Front-end developer", likesCount: 1.2 + "m"},
// ];
root.render(
  <React.StrictMode>
    <App appState={State} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
