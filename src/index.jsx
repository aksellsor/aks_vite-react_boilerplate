import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UmbracoProvider } from "~/contexts/Umbraco";

ReactDOM.createRoot(document.getElementById('root')).render(
  <UmbracoProvider>
    <App />
  </UmbracoProvider>,
);
