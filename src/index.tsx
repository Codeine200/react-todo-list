import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/reset.css';
import './assets/styles/main.css';
import reportWebVitals from './reportWebVitals';
import {ToDoListPage} from "./pages/ToDoListPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastProvider} from "./providers/Toast";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ToastProvider>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<ToDoListPage />}></Route>
              </Routes>
          </BrowserRouter>
      </ToastProvider>
  </React.StrictMode>
);

reportWebVitals();
