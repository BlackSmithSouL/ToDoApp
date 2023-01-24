import React, { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField'
import { ToDoList } from './components/ToDoList';
import { ToDo } from './model';
import { DragDropContext } from 'react-beautiful-dnd'

export const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<ToDo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo) {

      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  return (
    <DragDropContext onDragEnd={() => {}}>
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
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
      </div>
    </DragDropContext>
  )
}