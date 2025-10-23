import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/reset.css';
import './assets/styles/main.css';
import reportWebVitals from './reportWebVitals';
import {ToDoListPage} from "./pages/ToDoListPage";
import {ToastProvider} from "./providers/Toast";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ToastProvider>
          <ToDoListPage />
      </ToastProvider>
  </React.StrictMode>
);

reportWebVitals();
