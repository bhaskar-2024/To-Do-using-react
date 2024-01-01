import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../shop/todoSlice'
import {useState} from 'react'
function Form() {
  
  const[input , setInput] = useState("");
  const dispatch = useDispatch();

  const addTodos = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
    
  }

    return (
    <>
    <form 
    onSubmit={addTodos}
    className='lg:border-2 lg:flex lg:rounded-md lg:border-slate-200 lg:h-12'>
        <input type="text"
        className='lg:w-10/12 lg:h-full lg:px-3 lg:text-lg lg:outline-none lg:border-r-none lg:rounded-r-none lg:bg-blue-50 lg:rounded lg:text-black font-mono'
        value = {input}
        onChange = {(e)=>{setInput(e.target.value)}}
        
        placeholder='Enter your Task here'
         />
         <button type='submit'
         className='lg:bg-blue-600 lg:w-2/12 lg:text-white lg:font-bold lg:text-2xl lg:border-l-none lg:rounded-l-none lg:hover:bg-blue-700
          lg:border-blue-950 lg:rounded  font-mono '
         >Add Todo</button>
    </form>
    </>
  )
}

export default Form