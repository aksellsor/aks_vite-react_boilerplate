import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UmbracoProvider } from "~/contexts/Umbraco";

const rootDiv = document.getElementById('root');
ReactDOM.createRoot(rootDiv).render(
  <UmbracoProvider dataset={rootDiv.dataset}>
    <App />
  </UmbracoProvider>,
);
