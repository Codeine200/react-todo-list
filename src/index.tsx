import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/reset.css';
import './assets/styles/main.css';
import reportWebVitals from './reportWebVitals';
import {ToDoListPage} from "./pages/ToDoListPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ToDoListPage />
  </React.StrictMode>
);

reportWebVitals();
