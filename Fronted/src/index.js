import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux'
import store from './Store/Strore';
import {AuthContextProvider} from './context/AuthContext';

ReactDOM.render(
  <AuthContextProvider>
  <React.StrictMode>
    <BrowserRouter>
     < ReduxProvider store={store}>
      <App />
     </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
  </AuthContextProvider>,
  
  document.getElementById('root')
);

reportWebVitals();
