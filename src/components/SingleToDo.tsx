import React from 'react'
import { ToDo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import "./styles.css"

type singleTodoProps = {
  todo: ToDo,
  todos: ToDo[],
  setTodos:React.Dispatch<React.SetStateAction<ToDo[]>>
}

export const SingleToDo = ({
  todo,
  todos,
  setTodos
}:singleTodoProps) => {
  return (
    <form className='todos__single'>
      <span className='todos__single__text'>
        {todo.todo}
      </span>
        <div>
          <span className='icon'>
            <AiFillEdit />
          </span>
          <span className='icon'>
            <AiFillDelete />
          </span>
          <span className='icon'>
            <MdDone />
          </span>
        </div>
    </form>
  )
}