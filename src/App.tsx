import React, { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField'
import { ToDo } from './model';

export const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField 
        todo={todo} 
        setTodo={setTodo}
        handleAdd={handleAdd}
        />
    </div>
  )
}