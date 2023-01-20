import React, { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField'
import { ToDoList } from './components/ToDoList';
import { ToDo } from './model';

export const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo) {

      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField 
        todo={todo} 
        setTodo={setTodo}
        handleAdd={handleAdd}
        />
        <ToDoList 
          todos={todos}
          setTodos={setTodos}
        />
    </div>
  )
}