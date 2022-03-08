import React, {useState} from 'react'      //to use state
import Todo from './Todo'

// import TodoList from './components/'
import TodoForm from './Todoform'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {   //to include spaces in entries stackoverflow eg
            return
        }
        
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todo, ...todos);
    };


    const updateTodo = (todoId, newValue) => {
        
        if(!newValue.text || /^\s*$/.test(newValue.text)) {     //same from addTodo but with newValue
            return    
        }   

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    }







const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr);
}         //Checking to see in actual array the todo and remove it from the app by clicking on the x button







  const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
              todo.isComplete = !todo.isComplete
          }
          return todo
      })
      setTodos(updatedTodos);
  }  
  return (
    <div>
        <h1>Make your plan for the day</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList