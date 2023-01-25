import React, { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField'
import { ToDoList } from './components/ToDoList';
import { ToDo } from './model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

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

  const onDragEnd = (result:DropResult) => {
    const {source, destination} = result

    if(!destination) return

    if(destination.droppableId===source.droppableId && destination.index===source.index) return

    let add, 
      active = todos, 
      complete = completedTodos;
    
    if (source.droppableId === 'TodoList') {
      add=active[source.index]
      active.splice(source.index, 1)
    } else {
      add=complete[source.index]
      complete.splice(source.index, 1)
    }

    if (destination.droppableId === 'TodoList') {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setCompletedTodos(complete)
    setTodos(active)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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