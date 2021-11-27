import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './store/index';


ReactDOM.render(
  //<BrowserRouter>
    //<Provider store={store}>
      //<React.StrictMode>
        //<Routes>
          //<Route path="/" element={<App />} />
        //</Routes>
      //</React.StrictMode>
    //</Provider>
  //</BrowserRouter>,
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

