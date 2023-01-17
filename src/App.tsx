import React from 'react'
import './App.css'
import { InputField } from './components/InputField'

export const App: React.FC = () => {
  
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField />
    </div>
  )
}