import React, { useRef } from 'react'
import './styles.css'

type inputFieldProps = {
  todo: string;
  setTodo(): React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<inputFieldProps> = ({
  todo,
  setTodo,
  handleAdd
}) => {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form 
      className='input'
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
      }}
    >
        <input 
          ref={inputRef}
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
