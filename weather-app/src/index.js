import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Auth0Provider
    domain="dev-fxjbmegke1ksv11l.us.auth0.com"
    clientId="Qw9t8eq4QfKzk5IxPwFFsVwIy0Bkr0sg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
   </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
