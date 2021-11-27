import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Route, Routes } from 'react-router';
import { store } from './store/index';
import { Provider } from 'react-redux';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

