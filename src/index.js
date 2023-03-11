import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderDOM = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App appState={state} dispatch={store.dispatch.bind(store)} /> {/* store.dispatch.bind(store)
        bind it function that take information only in obj that we write in () we bind store
        it's say that in our functions argument (this) it is store */}
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
rerenderDOM(store.getState());
store.subscribe(() => { //function that rerender our DOM
  let state = store.getState()
  rerenderDOM(state)
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

