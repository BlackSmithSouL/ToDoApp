import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { ToDo } from '../model'
import { SingleToDo } from './SingleToDo'
import './styles.css'

type listProps = {
    todos:ToDo[],
    setTodos:React.Dispatch<React.SetStateAction<ToDo[]>>
    completedTodos: ToDo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

export const ToDoList: React.FC<listProps> = ({
    todos, 
    setTodos,
    completedTodos,
    setCompletedTodos
}) => {
  return (
    <div className="container">
      <Droppable droppableId='TodosList'>
        {
          (provided) => (
            <div 
              className="todos" 
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
            <span className="todos__heading">
              Active Tasks
            </span>
            {
              todos.map((todo, index) => (
                <SingleToDo 
                  index={index}
                  todo={todo}
                  todos={todos}
                  key={todo.id}
                  setTodos={setTodos}
                />
              ))
            }
            {provided.placeholder}
            </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {
          (provided) => (
            <div 
              className="todos remove"
              ref={provided.innerRef} 
              {...provided.droppableProps}  
            >
            <span className="todos__heading">
              Completed Tasks
            </span>
            {
            completedTodos.map((todo) => (
              <SingleToDo 
                index={index}
                todo={todo}
                todos={completedTodos}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))
            }
            {provided.placeholder}
            </div>
          )
        }
      </Droppable>
    </div>
  )
}