import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="freetyme.auth0.com"
      clientId="5mxCOdFEnHQ5FmlwLinMt5vUOfSc5VNX"
      redirectUri={`${window.location.origin}/authorise`}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
