import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
