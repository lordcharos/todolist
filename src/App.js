//import React from 'react';
import './App.css';
// import Todoform from './components/Todoform.js';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="todo-app">
      <h1>To do List App</h1>        
      <TodoList /> 
    </div>
  );
}

export default App;
