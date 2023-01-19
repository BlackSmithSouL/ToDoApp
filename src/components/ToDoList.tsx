import React from 'react'
import { ToDo } from '../model'
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
            <li>{todo.todo}</li>
        ))}
    </div>
  )
}