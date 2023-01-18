import React from 'react'
import './styles.css'

type inputFieldProps = {
  todo: string,
  setTodo(): void,
  handleAdd(e: React.FormEvent): void
}

export const InputField: React.FunctionComponent<inputFieldProps> = ({
  todo,
  setTodo,
  handleAdd
}) => {
  return (
    <form 
      className='input'
      onSubmit={handleAdd}
    >
        <input 
          value={todo}
          onChange={
            (e) => setTodo(e.target.value)
          }
          type='input' 
          placeholder='Enter a task' className='input__box'
          />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}
