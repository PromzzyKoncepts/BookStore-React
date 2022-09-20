import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
// import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux'
// import rootReducer from './reducers'
import App from './App';

// const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
