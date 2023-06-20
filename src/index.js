import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Classes/App';
import { App as SocialApp } from './socialmedia-project/App.tsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <SocialApp />
  </React.StrictMode>
);
