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
    <div className="container">
      <div className="todos">
        <span className="todos__heading">
          Active Tasks
        </span>
        {
          todos.map((todo) => (
            <SingleToDo 
              todo={todo}
              todos={todos}
              key={todo.id}
              setTodos={setTodos}
            />
          ))
        }
      </div>
      <div className="todos remove">
        <span className="todos__heading">
          Completed Tasks
        </span>
        {
          todos.map((todo) => (
            <SingleToDo 
              todo={todo}
              todos={todos}
              key={todo.id}
              setTodos={setTodos}
            />
          ))
        }
      </div>
    </div>
  )
}