import React, { useState, useEffect, useRef } from 'react'     //rfce

function TodoForm(props) {
const [input, setInput] = useState('');           //setting the state



const inputRef = useRef(null)

useEffect(() => {
  inputRef.current.focus()
})


const handleChange = e => {
  setInput(e.target.value);
};

const handleSubmit = e => {         
  e.preventDefault();                


  props.onSubmit({
       id: Math.floor(Math.random() * 10000),  //generate random id below 10000
       text: input
    });

    setInput('');
};


  return (                //creating form
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Add a todo' 
            value={input} 
            name='text' 
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button">Add Todo</button>
        </form>                   
    </div>
  );
}

export default TodoForm
