import { useState } from 'react'
import { useSelector } from "react-redux";
import './App.css'
import Form from './components/Form'
import TodoContainer from './components/TodoContainer'

import Header from './components/Header'
function App() {
const todos = useSelector(state => state.todos)

  return (
    <>
   
    <TodoContainer/>
   
    </>
  )
}

export default App
