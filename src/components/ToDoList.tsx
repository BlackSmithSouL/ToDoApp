import React from 'react'
import { ToDo } from '../model'
import { SingleToDo } from './SingleToDo'
import './styles.css'

type listProps = {
    todos:ToDo[],
    setTodos:React.Dispatch<React.SetStateAction<ToDo[]>>
}

export const ToDoList: React.FC<listProps> = ({
    todos, 
    setTodos
}) => {
  return (
    <div className='todos'>
        {todos.map((todo) => (
            <SingleToDo 
              todo={todo} 
              key={todo.id}
              todos={todos}
              setTodos={setTodos}  
            />
        ))}
    </div>
  )
}