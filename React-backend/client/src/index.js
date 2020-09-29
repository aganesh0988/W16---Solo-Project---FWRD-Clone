import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { thunks } from './store/movies'; //NEED TO CHANGE TO PRODUCTS

const store = configureStore();

store.dispatch(thunks.getMovies()); //NEED TO CHANGE TO PRODUCTS

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
