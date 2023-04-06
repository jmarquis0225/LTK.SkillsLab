import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from './pages/Todo/Todo';
import { Provider } from 'react-redux';
import { todoStore } from './store/TodoStore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/todo",
    element: <Todo/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={todoStore}><RouterProvider router={router} /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
