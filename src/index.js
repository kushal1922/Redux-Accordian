import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

store.subscribe(()=>console.log(store.getState()));
const unsubscribe = store.subscribe(()=> console.log(store.getState()));
unsubscribe();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();